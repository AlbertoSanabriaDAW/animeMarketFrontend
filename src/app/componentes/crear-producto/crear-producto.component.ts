// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import {ProductoModelo} from '../../modelos/producto.modelo';
// import { HttpClient } from '@angular/common/http';
// import {FormsModule} from '@angular/forms';
// import {NgIf} from '@angular/common';
//
// @Component({
//   selector: 'app-crear-producto',
//   templateUrl: './crear-producto.component.html',
//   imports: [
//     FormsModule,
//     NgIf
//   ],
//   styleUrls: ['./crear-producto.component.css']
// })
// export class CrearProductoComponent {
//   @Input() isOpen: boolean = false;
//   @Output() closeEvent = new EventEmitter<void>();
//   @Output() productoCreado = new EventEmitter<ProductoModelo>(); // Esto es necesario para que Angular detecte el evento
//
//   producto: ProductoModelo = {
//     id: 1500,
//     nombre: 'NuevoProducto_1',
//     descripcion: 'Este es un producto nuevo',
//     precio: 1,
//     imagen: 'IproductoNuevo.png',
//     id_tematica: 1
//   };
//
//   constructor(private http: HttpClient) {}
//
//   close() {
//     this.isOpen = false;
//     this.closeEvent.emit();
//   }
//
//   crearProducto() {
//     this.http.post('http://localhost:8000/api/productos/create', this.producto)
//       .subscribe(response => {
//         console.log('Producto creado exitosamente:', response);
//         this.productoCreado.emit(this.producto); // Emitimos el evento al crearse un producto exitosamente
//         this.close();
//       }, error => {
//         console.error('Error al crear el producto:', error);
//       });
//   }
// }

import {Component, EventEmitter, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  @Input() isOpen: boolean = false;
  @Output() closeEvent = new EventEmitter<void>();
  @Output() productoCreado = new EventEmitter<void>();
  producto = {
    nombre: 'NuevoProducto_1',
    descripcion: 'Este es un producto nuevo',
    precio: 1,
    imagen: 'IproductoNuevo.png',
    id_tematica: 1
  };


  constructor(private http: HttpClient) {}

  crearProducto() {
    const url = '/create';  // Ajustar la URL según la ruta definida en el backend
    const headers = { 'Content-Type': 'application/json' };

    this.http.post(url, JSON.stringify(this.producto), { headers })
      .pipe(
        catchError(err => {
          console.error('Error al crear producto:', err);
          alert('Error al crear el producto. Verifica los datos e inténtalo nuevamente.');
          return of(null);
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Producto creado exitosamente:', response);
          alert('Producto creado exitosamente.');
          this.close();
        }
      });
  }

  abrirFormulario() {
    this.isOpen = true;
  }


  close() {
    this.isOpen = false;
  }
}

//   PRODUCTO MODELO EJEMPLO
//   producto: ProductoModelo = {
//     id: 1500,
//     nombre: 'NuevoProducto_1',
//     descripcion: 'Este es un producto nuevo',
//     precio: 1,
//     imagen: 'IproductoNuevo.png',
//     id_tematica: 1
//   };

