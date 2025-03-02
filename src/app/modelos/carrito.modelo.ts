import {ProductoModelo} from './producto.modelo';

export interface CarritoModelo {
  cantidad: number;
  id: number;
  id_carrito: number;
  id_producto: number;
  id_usuario: number;
  producto: ProductoModelo;
  nombre: string;
  precio: number;
}
