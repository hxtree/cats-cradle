import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../../mongoose/mongoose.repository';
import { TPersonDocument, Person } from './person.schema';

@Injectable()
export class PersonRepository extends Repository<TPersonDocument> {
  constructor(
    // @ts-ignore
    @InjectModel(Person.name) private entity: Model<TPersonDocument>,
  ) {
    super(entity);
  }
}
