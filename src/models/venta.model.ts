import {Entity, model, property} from '@loopback/repository';

@model()
export class Venta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdVenta?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdPedido: number;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  PagoRes: number;

  @property({
    type: 'object',
    required: true,
  })
  Comprobante: object;


  constructor(data?: Partial<Venta>) {
    super(data);
  }
}

export interface VentaRelations {
  // describe navigational properties here
}

export type VentaWithRelations = Venta & VentaRelations;
