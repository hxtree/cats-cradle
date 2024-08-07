/* eslint-disable func-names */
import {
  Prop, Schema, SchemaFactory, raw,
} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  ArrayMaxSize,
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsString,
  Type,
  ValidateNested,
} from '@galaxyops/validation-schemas';
import { v4 } from 'uuid';
import { BaseEntity, BaseEntityProps } from '@galaxyops/nestjs-modules';
import { TrophyCriteriaEmbeddable } from './trophy-criteria-embeddable.schema';

@Schema({ collection: 'achievements' })
export class Achievement extends BaseEntity {
  @IsString()
  @Prop({
    required: true,
    type: String,
  })
  public title: string;

  @IsString()
  @Prop({
    required: true,
    type: String,
    default: () => v4(),
  })
  public description: string;

  /**
   * The SQS event that is listened to to increment the player progress
   */
  @IsString()
  @Prop({
    required: true,
    type: String,
    default: () => v4(),
  })
  public eventListener: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayUnique()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @Type(() => TrophyCriteriaEmbeddable)
  @Prop([])
  public trophyCriteria: TrophyCriteriaEmbeddable[];

  constructor(partial: NonNullable<Omit<Achievement, BaseEntityProps>>) {
    super();
    Object.assign(this, partial);
  }
}

export type AchievementInfo = Omit<Achievement, BaseEntityProps>;

export type TAchievementDocument = Achievement & Document;

export const AchievementSchema = SchemaFactory.createForClass(Achievement)
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

AchievementSchema.index({
  id: 1,
});
