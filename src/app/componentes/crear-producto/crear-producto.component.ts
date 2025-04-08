import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ProductoModelo} from '../../modelos/producto.modelo';
import { HttpClient } from '@angular/common/http';
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
  @Output() productoCreado = new EventEmitter<ProductoModelo>(); // Esto es necesario para que Angular detecte el evento

  producto: ProductoModelo = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    id_tematica: 0
  };

  constructor(private http: HttpClient) {}

  close() {
    this.isOpen = false;
    this.closeEvent.emit();
  }

  crearProducto() {
    this.http.post('http://localhost:8000/api/productos/create', this.producto)
      .subscribe(response => {
        console.log('Producto creado exitosamente:', response);
        this.productoCreado.emit(this.producto); // Emitimos el evento al crearse un producto exitosamente
        this.close();
      }, error => {
        console.error('Error al crear el producto:', error);
      });
  }
}


// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {ProductoModelo} from '../../modelos/producto.modelo';
// import {FormsModule} from '@angular/forms';
//
// @Component({
//   selector: 'app-crear-producto',
//   templateUrl: './crear-producto.component.html',
//   imports: [
//     FormsModule
//   ],
//   styleUrls: ['./crear-producto.component.css']
// })
// export class CrearProductoComponent {
//   @Input() isOpen: boolean = false;
//   @Output() closeEvent = new EventEmitter<void>();
//
//   producto: ProductoModelo = {
//     id: 0,
//     nombre: '',
//     descripcion: '',
//     precio: 0,
//     imagen: '',
//     id_tematica: 0
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
//         this.close();
//       }, error => {
//         console.error('Error al crear el producto:', error);
//       });
//   }
// }
