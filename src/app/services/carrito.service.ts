import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = '/api';

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

    return this.http.post(`/api/carritoproductos/carrito/agregar`, { id_producto: producto.id }, { headers });
  }

  obtenerCarrito(idUsuario: number | null): Observable<any> {
    return this.http.get(`/api/carritos/byusuario/${idUsuario}`);
  }
}
