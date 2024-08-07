/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsDateString,
  IsNumber,
  IsUuidV4,
} from '@galaxyops/validation-schemas';
import { v4 } from 'uuid';
import { BaseEntity } from '@galaxyops/nestjs-modules';
import { getHadeanTime } from './get-hadean-time';

@Schema({ collection: 'instance' })
export class Instance extends BaseEntity {
  /**
   * Duration always increases when a player is logged into an instance.
   * It stops when all players log out of an instance.
   * the unit of measurement for the value stored is minutes
   */
  @IsNumber()
  @Prop({
    type: Number,
    default: () => 0,
  })
  public duration: number;
}

export type TInstanceDocument = Instance & Document;

export const InstanceSchema = SchemaFactory.createForClass(Instance)
  .set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc: any, ret: any) {
      delete ret._id;
    },
  })
  .set('toObject', {
    virtuals: true,
    versionKey: false,
    transform(doc: any, ret: any) {
      ret._id = ret.id;
      delete ret.id;
    },
  });

// TODO: make duration update based on last login date

InstanceSchema.virtual('time').get(function () {
  return getHadeanTime(this.duration);
});

InstanceSchema.index({
  id: 1,
});
