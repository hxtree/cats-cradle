import { ClassConstructor, plainToInstance } from 'class-transformer';
import { cloneDeep } from 'lodash';
import { generateFakeData } from './generate-fake-data';
import { getSchemas } from './schemas';

export class MockFactory {
  public static create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
  ): Promise<T> {
    return new MockFactory().create(constructor, partial);
  }

  public async create<T>(
    constructor: ClassConstructor<unknown>,
    partial: Partial<T> = {},
  ): Promise<T> {
    const schemas = getSchemas();
    const randomFixture = await generateFakeData(
      schemas[constructor.name],
      schemas,
    );
    const partialClone = cloneDeep(partial);
    const object = { ...randomFixture, ...partialClone };
    const objectInstance = plainToInstance(constructor, object);

    return objectInstance as T;
  }
}
