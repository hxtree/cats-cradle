import {
  Controller,
  Post,
  Get,
  NotFoundException,
  Query,
  Body,
  VERSION_NEUTRAL,
  Delete,
} from '@nestjs/common';
import { IsUuidV4Validator } from '@galaxyops/validation-schemas';
import { CreateDto } from './create.dto';
import { InstanceRepository } from '../../models/instance.repository';
import { Instance } from '../../models/instance.schema';
import { DeleteDto } from './delete.dto';
import { QueryDto } from './query.dto';

@Controller({ path: 'instances', version: ['1', VERSION_NEUTRAL] })
export class InstanceController {
  constructor(private readonly _instanceRepository: InstanceRepository) {}

  @Get()
  async findByFilter(@Query() filterParams: QueryDto): Promise<any[]> {
    const result = await this._instanceRepository.find({
      filterParams,
    });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Get()
  async findAll(): Promise<any> {
    const result = await this._instanceRepository.findAll();
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Post()
  async create(@Body() body: CreateDto) {
    const instance = await this._instanceRepository.create(new Instance());
    return instance;
  }

  @Delete()
  async delete(@Body() body: DeleteDto) {
    return this._instanceRepository.delete({
      id: body.id,
    });

    // TODO publish event
  }
}
