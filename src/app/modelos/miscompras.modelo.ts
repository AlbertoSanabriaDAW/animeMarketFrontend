export interface miscomprasModelo {
  id_carrito: number;
  lista_productos: {
    id_producto: number;
    nombre: string;
    cantidad: number;
    precio: number;
    subtotal: number;
  }[];
  precio_total: number;
}
