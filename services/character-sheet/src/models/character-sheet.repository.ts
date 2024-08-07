import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@galaxyops/nestjs-modules';
import {
  TCharacterSheetDocument,
  CharacterSheet,
} from './character-sheet.schema';

@Injectable()
export class CharacterSheetRepository extends BaseRepository<TCharacterSheetDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(CharacterSheet.name)
    private entity: Model<TCharacterSheetDocument>,
  ) {
    super(entity);
  }
}
