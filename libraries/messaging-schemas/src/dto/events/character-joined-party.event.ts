import { IsUuidV4 } from '@cats-cradle/validation-schemas';
import { BaseEventDto } from './base-event.dto';

export class CharacterJoinedParty extends BaseEventDto {
  @IsUuidV4()
  public instanceId: string;

  @IsUuidV4()
  public characterId: string;
}
