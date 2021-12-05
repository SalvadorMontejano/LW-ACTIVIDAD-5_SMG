import {Entity, model, property} from '@loopback/repository';

@model()
export class Producto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdProducto?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdCategoria: number;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  Costo: number;

  @property({
    type: 'number',
    required: true,
  })
  Existencia: number;

  @property({
    type: 'object',
    required: true,
  })
  Imagen: object;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
