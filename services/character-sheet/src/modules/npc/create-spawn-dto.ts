import { ApiProperty } from '@nestjs/swagger';
import { IsUuidV4, IsEnum } from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { PlaceIds, PlaceId } from '../../data/place';

export class CreateSpawnDto {
  @IsUuidV4()
  @ApiProperty({
    default: v4(),
  })
  public instanceId: string;

  @IsEnum(PlaceIds)
  @ApiProperty({
    enum: PlaceIds,
    description:
      'Generate a spawn for a designated area. Requestor is responsible for only making request for areas where party is presence to avoid computing irrelevant spawns.',
  })
  public place: PlaceId;

  // TODO question for level designers
  // should any character params be exposed?
  // should everything be chosen at random?
}
