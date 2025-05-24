import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoModelo } from '../../modelos/producto.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {ReseniasModelo} from '../../modelos/resenias.modelo';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  //styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  producto: ProductoModelo;
  resenias: ReseniasModelo[] = [];
  cantidad: number = 1;
  mostrarMensaje: boolean = false;
  nuevaResenia = {
    id_producto: 0,
    comentario: '',
    calificacion: 0
  }
  mediaCalificaciones: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductoModelo,
    private http: HttpClient
  ) {
    this.producto = data;
  }

  ngOnInit(): void {
    console.log('Producto recibido:', this.producto);

    this.obtenerResenias().subscribe({
      next: (resenias: ReseniasModelo[]) => {
        console.log('Reseñas obtenidas:', resenias);
        this.resenias = resenias;
        this.mediaCalificaciones = this.calcularMediaCalificaciones();
      }
    });
  }

  calcularMediaCalificaciones(): number {
    if (this.resenias.length === 0) {
      return 0;
    }

    const totalCalificaciones = this.resenias.reduce((sum, resenia) => sum + resenia.calificacion, 0);
    return Math.round((totalCalificaciones / this.resenias.length) * 100) / 100;
  }

  obtenerResenias(): Observable<ReseniasModelo[]> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `/api/resenias/producto/${this.producto.id}`;

    return this.http.get<ReseniasModelo[]>(url, { headers });
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

    const index = carrito.findIndex((item: any) => item.id === this.producto.id);

    if (index > -1) {
      carrito[index].cantidad += this.cantidad;
    } else {
      const productoConCantidad = {
        ...this.producto,
        cantidad: this.cantidad
      };
      carrito.push(productoConCantidad);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log('Producto añadido al carrito:', carrito);

    this.mostrarMensaje = true;
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000);
  }

  agregarResenia() {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return;
    }

    this.nuevaResenia.id_producto = this.producto.id;

    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = '/api/resenias/agregar';

    const formData = new FormData();
    formData.append('id_producto', this.nuevaResenia.id_producto.toString());
    formData.append('comentario', this.nuevaResenia.comentario);
    formData.append('calificacion', this.nuevaResenia.calificacion.toString());

    this.http.post(url, formData, { headers }).subscribe({
      next: (response) => {
        this.obtenerResenias().subscribe({
          next: (resenias: ReseniasModelo[]) => {
            this.resenias = resenias;
            this.mediaCalificaciones = this.calcularMediaCalificaciones();
          },
          error: (error) => {
            console.error('Error al obtener reseñas actualizadas:', error);
          }
        });

        this.nuevaResenia.comentario = '';
        this.nuevaResenia.calificacion = 0;
      },
      error: (error) => {
        const errorBackend = error.error.message;
        alert(errorBackend || 'Error al agregar la reseña');
      }
    });
  }
}
