import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdUsuario?: number;

  @property({
    type: 'string',
    required: true,
  })
  Contrasenia: string;

  @property({
    type: 'string',
  })
  Descripcion?: string;

  @property({
    type: 'string',
    required: true,
  })
  Rol: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
