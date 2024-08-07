import supertest from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, Injectable } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { S3ClientService, S3Service } from '@galaxyops/nestjs-modules';
import { mockClient } from 'aws-sdk-client-mock';
import { OperationInput, OperationOutput } from './operation.dto';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller';

describe('/pdf', () => {
  let app: INestApplication;
  let pdfService: PdfService;
  let s3Service: S3Service;

  const s3Mock = mockClient(S3Client);

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [PdfController],
      providers: [
        PdfService,
        S3Service,
        { provide: S3ClientService, useValue: s3Mock },
      ],
    }).compile();

    app = moduleRef.createNestApplication();

    pdfService = moduleRef.get<PdfService>(PdfService);

    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  describe('GET /pdf', () => {
    it('should render url page to pdf', async () => {
      jest
        .spyOn(pdfService, 'urlToPdf')
        .mockImplementation((url: string) => Promise.resolve(Buffer.from('Test', 'utf-8')));

      const response = await supertest(app.getHttpServer())
        .get('/pdf')
        .expect(200);

      expect(response.header['content-type']).toEqual('application/pdf');
      expect(response.body).toMatchObject(Buffer.from('Test', 'utf-8'));
    });
  });

  describe('POST /pdf', () => {
    it('should render url page to pdf', async () => {
      jest
        .spyOn(pdfService, 'urlToPdf')
        .mockImplementation((url: string) => Promise.resolve(Buffer.from('Test', 'utf-8')));

      const response = await supertest(app.getHttpServer())
        .post('/pdf')
        .send({
          input: OperationInput.URL,
          output: OperationOutput.PDF,
          url: 'http://example.com',
        })
        .expect(201);

      expect(response.header['content-type']).toEqual('application/pdf');
      expect(response.body).toMatchObject(Buffer.from('Test', 'utf-8'));
    });

    it('should render url page to json', async () => {
      jest
        .spyOn(pdfService, 'urlToPdf')
        .mockImplementation((url: string) => Promise.resolve(Buffer.from('Test', 'utf-8')));

      const response = await supertest(app.getHttpServer())
        .post('/pdf')
        .send({
          input: OperationInput.URL,
          output: OperationOutput.JSON,
          url: 'http://example.com',
        })
        .expect(201);

      expect(response.header['content-type']).toEqual(
        'application/json; charset=utf-8',
      );
      expect(response.body).toMatchObject(
        expect.objectContaining({
          content: 'VGVzdA==',
          filename: expect.stringContaining('.pdf'),
          mimeType: 'application/pdf',
        }),
      );
    });

    it('should render url page to data', async () => {
      jest.spyOn(pdfService, 'urlToData').mockImplementation((url: string) => Promise.resolve({
        title: 'Example Domain',
      }));

      const response = await supertest(app.getHttpServer())
        .post('/pdf')
        .send({
          input: OperationInput.URL,
          output: OperationOutput.DATA,
          url: 'https://example.com',
        })
        .expect(201);

      expect(response.header['content-type']).toEqual(
        'application/json; charset=utf-8',
      );
      expect(response.body).toMatchObject(
        expect.objectContaining({
          title: 'Example Domain',
        }),
      );
    });

    it('should render url page to pdf', async () => {
      jest
        .spyOn(pdfService, 'htmlToPdf')
        .mockImplementation((url: string) => Promise.resolve(Buffer.from('Test', 'utf-8')));

      const response = await supertest(app.getHttpServer())
        .post('/pdf')
        .send({
          input: OperationInput.HTML,
          output: OperationOutput.PDF,
          content:
            '<html><head><title>Example Page</title><body>Example</body></html>',
        })
        .expect(201);

      expect(response.header['content-type']).toEqual('application/pdf');
      expect(response.body).toMatchObject(Buffer.from('Test', 'utf-8'));
    });

    it('should render url page to json', async () => {
      jest
        .spyOn(pdfService, 'htmlToPdf')
        .mockImplementation((url: string) => Promise.resolve(Buffer.from('Test', 'utf-8')));

      const response = await supertest(app.getHttpServer())
        .post('/pdf')
        .send({
          input: OperationInput.HTML,
          output: OperationOutput.JSON,
          content:
            '<html><head><title>Example Page</title><body>Example</body></html>',
        })
        .expect(201);

      expect(response.header['content-type']).toEqual(
        'application/json; charset=utf-8',
      );
      expect(response.body).toMatchObject(
        expect.objectContaining({
          content: 'VGVzdA==',
          filename: expect.stringContaining('.pdf'),
          mimeType: 'application/pdf',
        }),
      );
    });

    it('should render html page to data', async () => {
      jest.spyOn(pdfService, 'htmlToData').mockImplementation((html: string) => Promise.resolve({
        title: 'Example Page',
      }));

      const response = await supertest(app.getHttpServer())
        .post('/pdf')
        .send({
          input: OperationInput.HTML,
          output: OperationOutput.DATA,
          content:
            '<html><head><title>Example Page</title><body>Example</body></html>',
        })
        .expect(201);

      expect(response.header['content-type']).toEqual(
        'application/json; charset=utf-8',
      );
      expect(response.body).toMatchObject(
        expect.objectContaining({
          title: 'Example Page',
        }),
      );
    });
  });
});
