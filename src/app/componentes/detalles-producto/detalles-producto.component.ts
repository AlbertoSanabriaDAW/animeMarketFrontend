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
    this.modificarCantidadCarrito().subscribe({
      next: (response) => {
        console.log('✅ Cantidad modificada:', response);
        alert('Cantidad modificada con éxito en el carrito.');
      },
      error: (error) => {
        console.error('❌ Error al modificar cantidad en el carrito:', error);
        alert('Error al modificar cantidad en el carrito.');
      }
    });
  }

}
