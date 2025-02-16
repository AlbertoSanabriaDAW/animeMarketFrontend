import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductoModelo} from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:8000/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/all`);
  }

  getProductosBobobo(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/bobobo`);
  }
}
