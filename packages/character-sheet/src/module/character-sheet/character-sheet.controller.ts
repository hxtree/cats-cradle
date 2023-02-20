import {
  NotFoundException,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CharacterSheetRepository } from './character-sheet.repository';
import { CharacterSheetService } from './character-sheet.service';
import { CharacterSheet } from './character-sheet.schema';
import { CreateCharacterSheetDto } from './create-character-sheet-dto';

@Controller('/character-sheets')
export class CharacterSheetController {
  constructor(
    private _characterSheetService: CharacterSheetService,
    private _characterSheetRepository: CharacterSheetRepository,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    const result = await this._characterSheetRepository.findAll();

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Get(':id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
    const result = await this._characterSheetRepository.findOne({
      id,
    });

    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
    return this._characterSheetRepository.delete({
      id,
    });
  }

  @Post()
  async create(
    @Body() createCharacterSheetDto: CreateCharacterSheetDto,
  ): Promise<any> {
    const characterSheet = new CharacterSheet(createCharacterSheetDto);
    return this._characterSheetRepository.create(characterSheet);
  }
}
