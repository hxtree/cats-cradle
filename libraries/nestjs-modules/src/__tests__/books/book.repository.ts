import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '../../mongoose/base.repository';
import { TBookDocument, Book } from './book.schema';

@Injectable()
export class BookRepository extends BaseRepository<TBookDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(Book.name) private entity: Model<TBookDocument>,
  ) {
    super(entity);
  }
}
