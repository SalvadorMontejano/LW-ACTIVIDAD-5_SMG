import {Entity, model, property} from '@loopback/repository';

@model()
export class Pedido extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdPedido?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdProducto: number;

  @property({
    type: 'number',
    required: true,
  })
  IdPago: number;

  @property({
    type: 'number',
    required: true,
  })
  IdVenta: number;

  @property({
    type: 'date',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaReq: string;

  @property({
    type: 'number',
    required: true,
  })
  HoraReq: number;

  @property({
    type: 'number',
  })
  PagoPar?: number;

  @property({
    type: 'number',
    required: true,
  })
  PagoMed: number;

  @property({
    type: 'number',
    required: true,
  })
  CodigoPos: number;

  @property({
    type: 'string',
    required: true,
  })
  Domicilio: string;

  @property({
    type: 'string',
    required: true,
  })
  Referencia: string;


  constructor(data?: Partial<Pedido>) {
    super(data);
  }
}

export interface PedidoRelations {
  // describe navigational properties here
}

export type PedidoWithRelations = Pedido & PedidoRelations;
