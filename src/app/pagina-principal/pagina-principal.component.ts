import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ProductoModelo } from '../modelos/producto.modelo';
import { CarritoService } from '../services/carrito.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallesProductoComponent } from '../componentes/detalles-producto/detalles-producto.component';
import { CrearProductoComponent } from '../componentes/crear-producto/crear-producto.component';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  imports: [
    CrearProductoComponent,
    NgForOf,
    CurrencyPipe
  ],
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  productos: ProductoModelo[] = [];
  mostrarCrearProducto: boolean = false;

  constructor(
    private productosService: ProductoService,
    private carritoService: CarritoService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }

  abrirCrearProducto() {
    this.mostrarCrearProducto = true;
  }

  cerrarCrearProducto() {
    this.mostrarCrearProducto = false;
  }

  mostrarDetalles(producto: ProductoModelo) {
    this.dialog.open(DetallesProductoComponent, {
      width: '600px',
      maxHeight: '90vh',
      data: producto,
      autoFocus: false,
    });
  }
}





// Funciona (anterior 08-04-2025)
//
// import { Component, OnInit } from '@angular/core';
// import { ProductoService } from '../services/producto.service';
// import { ProductoModelo } from '../modelos/producto.modelo';
// import { NgForOf } from '@angular/common';
// import { CarritoService } from '../services/carrito.service';
// import { MatDialog } from '@angular/material/dialog';
// import { DetallesProductoComponent } from '../componentes/detalles-producto/detalles-producto.component';
//
//
// @Component({
//   selector: 'app-pagina-principal',
//   imports: [
//     NgForOf
//   ],
//   templateUrl: './pagina-principal.component.html',
//   styleUrl: './pagina-principal.component.css'
// })
// export class PaginaPrincipalComponent implements OnInit {
//
//   protected productos: ProductoModelo[] = [];
//
//   constructor(
//     private productosService: ProductoService,
//     private carritoService: CarritoService,
//     private dialog: MatDialog // ← Añadido para abrir modales
//   ) { }
//
//   ngOnInit() {
//     this.productosService.getProductos().subscribe(data => {
//       this.productos = data;
//       console.log(data);
//     });
//   }
//
//   mostrarDetalles(producto: ProductoModelo) {
//     this.dialog.open(DetallesProductoComponent, {
//       width: '600px',
//       maxHeight: '90vh',
//       data: producto,
//       autoFocus: false,
//     });
//   }
//
// }

