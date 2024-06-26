import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsOptional,
  IsString,
  IsUuidV4,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { ArchetypeId, ArchetypeIds } from '../../data/archetype';

export class CreateCharacterSheetDto {
  @ApiProperty({
    default: v4(),
  })
  @IsUuidV4()
  public instanceId!: string;

  @ApiProperty({ enum: ArchetypeIds, default: 'DARUMA_NAKAMURA' })
  @IsEnum(ArchetypeIds)
  public archetypeId!: ArchetypeId;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'Daruma',
  })
  public name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: 'Nakamura',
  })
  public surname?: string;
}
