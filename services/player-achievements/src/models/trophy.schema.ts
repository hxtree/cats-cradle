/* eslint-disable func-names */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsDateString, IsUuidV4 } from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';

@Schema({ collection: 'trophy' })
export class Trophy {
  // @Transform(({ value }) => value.toString())
  // _id: ObjectId;

  @IsUuidV4()
  @Prop({
    type: String,
    default: () => v4(),
  })
  public _id!: string;

  @IsUuidV4()
  @Prop({
    type: String,
    default: () => v4(),
  })
  public title: string;

  @IsUuidV4()
  @Prop({
    type: String,
    default: () => v4(),
  })
  public description: string;

  @IsDateString()
  @Prop({
    type: String,
    default: () => new Date().toISOString(),
  })
  public createdAt: string;
}

export type TTrophyDocument = Trophy & Document;

export const TrophySchema = SchemaFactory.createForClass(Trophy)
  .set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc: any, ret: any) {
      ret.id = ret._id;
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

TrophySchema.index({
  id: 1,
});