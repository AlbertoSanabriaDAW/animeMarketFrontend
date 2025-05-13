import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  //styleUrls: ['./crear-producto.component.css']
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
    id_tematicas: 1,
    valoraciones: 0,
    numeroValoraciones: 0,
    };

  constructor(private http: HttpClient) {}

  crearProducto() {
    const url = '/api/productos/create?XDEBUG_SESSION_START=19561';

    this.http.post(url, this.producto)
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
          this.productoCreado.emit();
          this.close();
        }
      });
  }

  close() {
    this.isOpen = false;
    this.closeEvent.emit();
  }
}


// ----------------------------------------------------------

// producto = {
//   nombre: 'NuevoProducto_1',
//   descripcion: 'Este es un producto nuevo',
//   precio: 1,
//   imagen: 'IproductoNuevo.png',
//   id_tematica: 1
// };

// const url = '/api/productos/create';

// -------------------------------------------------------------
