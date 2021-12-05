import {Entity, model, property} from '@loopback/repository';

@model()
export class MetPago extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdPago?: number;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;


  constructor(data?: Partial<MetPago>) {
    super(data);
  }
}

export interface MetPagoRelations {
  // describe navigational properties here
}

export type MetPagoWithRelations = MetPago & MetPagoRelations;
