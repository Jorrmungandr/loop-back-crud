import {DefaultCrudRepository} from '@loopback/repository';
import {Example, ExampleRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ExampleRepository extends DefaultCrudRepository<
  Example,
  typeof Example.prototype.id,
  ExampleRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Example, dataSource);
  }
}
