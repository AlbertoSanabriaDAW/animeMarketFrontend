import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductoModelo} from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = '/https://animemarketbackend.onrender.com';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/productos/all`);
  }

  getProductosBobobo(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/productos/bobobo`);
  }

  getProductosDragonball(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/productos/dragonball`);
  }

  getProductosDoraemon(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/productos/doraemon`);
  }

  getProductosPokemon(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/productos/pokemon`);
  }

  getProductosKimetsu(): Observable<ProductoModelo[]> {
    return this.http.get<ProductoModelo[]>(`${this.apiUrl}/productos/kimetsu`);
  }


}
