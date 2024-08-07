import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  MongooseModule,
  closeInMongodConnection,
  asyncForEach,
} from '@galaxyops/nestjs-modules';
import { FakerFactory, toPojo } from '@galaxyops/faker-factory';
import { v4 } from 'uuid';
import { InstanceSchema, Instance } from '../../models/instance.schema';
import { InstanceRepository } from '../../models/instance.repository';
import { InstanceController } from './instance.controller';
import { CreateDto } from './create.dto';
import { PLAY_HOURS_HADEAN_ZERO_POINT } from '../../models/get-hadean-time';

describe('/instances', () => {
  let app: INestApplication;
  let instanceRepository: InstanceRepository;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRootAsync({
          useFactory: async () => ({
            uri: process.env.MONGO_DATABASE_URI,
          }),
        }),
        MongooseModule.forFeature([
          { name: 'Instance', schema: InstanceSchema },
        ]),
      ],
      providers: [InstanceRepository],
      controllers: [InstanceController],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );

    instanceRepository = moduleRef.get<InstanceRepository>(InstanceRepository);

    await app.init();
  });

  afterEach(async () => {
    await instanceRepository.deleteAll();
  });

  afterAll(async () => {
    await closeInMongodConnection();
    app.close();
  });

  describe('GET /instances', () => {
    it('should find same amount of results as exists', async () => {
      const instances = await FakerFactory.createMany<Instance>(
        Instance,
        { createdAt: new Date().toISOString() },
        { min: 1, max: 4, optionals: false },
      );

      await asyncForEach(instances, async (instance: Instance) => {
        await instanceRepository.create(instance);
      });

      const result = await supertest(app.getHttpServer())
        .get('/instances')
        .expect(200);

      expect(result.body).toHaveLength(instances.length);
    });
  });

  describe('GET /instances/?id=', () => {
    it('should not found when no results exists', async () => {
      const id = v4();
      const response = await supertest(app.getHttpServer())
        .get(`/instance/?id=${id}`)
        .expect(404);
      expect(response.body).toMatchObject({
        error: 'Not Found',
        message: expect.stringContaining(`Cannot GET /instance/?id=${id}`),
        statusCode: 404,
      });
    });

    it('should find result if exists', async () => {
      const instance = await instanceRepository.create(
        await FakerFactory.create<Instance>(Instance, {}, { optionals: false }),
      );

      const result = await supertest(app.getHttpServer())
        .get(`/instances/?id=${instance!.id}`)
        .expect(200);

      expect(result.body[0]).toMatchObject(
        expect.objectContaining({
          id: instance!.id,
          createdAt: instance!.createdAt,
        }),
      );
    });

    it.each([
      ['-01E-000-0000HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 - 48000],
      ['-00E-037-0400HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 - 6000],
      ['-00E-000-0603HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 - 121],
      ['-00E-000-0303HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 - 61],
      ['-00E-000-0003HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 - 1],
      ['00E-000-0000HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60],
      ['+00E-000-0003HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 + 1],
      ['+00E-000-0303HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 + 61],
      ['+00E-000-0603HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 + 121],
      ['+00E-037-0400HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 + 6000],
      ['+01E-000-0000HT', PLAY_HOURS_HADEAN_ZERO_POINT * 60 + 48000],
    ])(
      'should return %s for %s minutes of playtime',
      async (expectedHadeanTime: string, playTimeDurationInMinutes: number) => {
        const instance = await FakerFactory.create<Instance>(
          Instance,
          {
            duration: playTimeDurationInMinutes,
            createdAt: new Date().toISOString(),
          },
          { optionals: false },
        );

        await instanceRepository.create(instance);

        const result = await supertest(app.getHttpServer())
          .get(`/instances/?id=${instance._id}`)
          .expect(200);

        expect(result.body[0]).toHaveProperty('time', expectedHadeanTime);
        expect(result.body[0]).toHaveProperty(
          'duration',
          playTimeDurationInMinutes,
        );
      },
    );
  });

  describe('POST /instances', () => {
    it('should create an instance', async () => {
      const body = await FakerFactory.create<CreateDto>(
        CreateDto,
        {},
        { optionals: false, pojo: true },
      );

      const response = await supertest(app.getHttpServer())
        .post('/instances')
        .send(body)
        .expect(201);

      const instance = await instanceRepository.findOneOrFail({
        id: response.body.id,
      });

      expect(response.body.id).toEqual(instance?._id);
      expect(instance?.createdAt).toBeDefined();
    });
  });

  describe('DELETE /instances', () => {
    it('should remove the specified instance only', async () => {
      const instances = await FakerFactory.createMany<Instance>(
        Instance,
        {},
        { min: 2, optionals: false },
      );

      await asyncForEach(instances, async (instance: Instance) => {
        await instanceRepository.create(instance);
      });

      const response = await supertest(app.getHttpServer())
        .delete('/instances')
        .send({ id: instances[0]._id })
        .expect(200);

      const results = await instanceRepository.findAll();

      expect(results).toHaveLength(instances.length - 1);

      expect(response.body).toMatchObject({
        deletedCount: 1,
        deleted: true,
      });
    });
  });
});
