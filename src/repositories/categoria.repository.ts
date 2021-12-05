import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnLocalDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.IdCategoria,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.connLocal') dataSource: ConnLocalDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
