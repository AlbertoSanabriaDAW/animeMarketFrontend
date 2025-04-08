import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoModelo } from '../../modelos/producto.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  producto: ProductoModelo;
  cantidad: number = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductoModelo,
    private http: HttpClient
  ) {
    this.producto = data;
  }

  ngOnInit(): void {
    console.log('Producto recibido:', this.producto);
  }

  modificarCantidadCarrito(): Observable<any> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    // ⚠️ URL DEFINITIVA SEGÚN TU CONTROLADOR SYMFONY
    const url = '/api/carritoproductos/carrito/detalles';

    const body = {
      id_producto: this.producto.id,
      cantidad: this.cantidad
    };

    return this.http.post(url, body, { headers });
  }



  anyadirCantidad() {
    const carritoJSON = localStorage.getItem('carrito');
    let carrito = carritoJSON ? JSON.parse(carritoJSON) : [];
    // Si el carrito está vacío, inicializarlo como un array vacío
    // Verificar si el producto ya está en el carrito
    const index = carrito.findIndex((item: any) => item.id === this.producto.id);

    if (index > -1) {
      // Producto ya en carrito, actualizamos la cantidad
      carrito[index].cantidad += this.cantidad;
    } else {
      // Producto nuevo, lo añadimos con cantidad
      const productoConCantidad = {
        ...this.producto,
        cantidad: this.cantidad
      };
      carrito.push(productoConCantidad);
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Opcional: Puedes emitir un evento o llamar a un método de servicio para actualizar el icono de carrito o similar
    console.log('Producto añadido al carrito:', carrito);
  }

}
