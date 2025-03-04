import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CarritoModelo} from '../modelos/carrito.modelo';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = '/https://animemarketbackend.onrender.com';

  constructor(private http: HttpClient) {}

  aniadirAlCarrito(producto: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtener el token

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Enviar el token en la cabecera
    });

    return this.http.post(`/https://animemarketbackend.onrender.com/carritoproductos/carrito/agregar`, { id_producto: producto.id }, { headers });
  }

  obtenerCarrito(): Observable<CarritoModelo[]> {
    const token = localStorage.getItem('token'); // Obtener el token

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Enviar el token en la cabecera
    });
    return this.http.get<CarritoModelo[]>(`/https://animemarketbackend.onrender.com/carritoproductos/byusuario`, { headers });
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

    return this.http.delete(`/https://animemarketbackend.onrender.com/carritoproductos/carrito/eliminar/${idProducto}`, { headers });
  }

  limpiarCarrito() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`/https://animemarketbackend.onrender.com/carritoproductos/carrito/limpiar`, { headers  });

  }
}
