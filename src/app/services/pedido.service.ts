import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductoModelo} from '../modelos/producto.modelo';
import {PedidoModelo} from '../modelos/pedido.modelo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  comprar(carritoId: number): any {

    const token = localStorage.getItem('token'); // Obtener el token

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Enviar el token en la cabecera
    });

    return this.http.post(`${this.apiUrl}/pedidos/comprar/${carritoId}`,{} ,{ headers });
  }
}
