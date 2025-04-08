import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarritoModelo } from '../modelos/carrito.modelo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  aniadirAlCarrito(producto: any): Observable<any> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}/carritoproductos/carrito/agregar`, { id_producto: producto.id }, { headers }).pipe(
      tap((response: any) => {
        if (response && response.id) {
          let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

          // Buscar si el producto ya existe en el carrito
          const productoExistente = carrito.find((item: any) => item.id === response.id);

          if (productoExistente) {
            // Si existe, incrementa la cantidad
            productoExistente.cantidad = (productoExistente.cantidad || 1) + 1;
          } else {
            // Si no existe, añadirlo con cantidad = 1
            carrito.push({ ...response, cantidad: 1 });
          }

          localStorage.setItem('carrito', JSON.stringify(carrito));
        }
      })
    );
  }


  obtenerCarrito(): Observable<CarritoModelo[]> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<CarritoModelo[]>(`${this.apiUrl}/carritoproductos/byusuario`, { headers });
  }

  eliminarDelCarrito(idProducto: number): Observable<any> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`${this.apiUrl}/carritoproductos/carrito/eliminar/${idProducto}`, { headers });
  }
}

