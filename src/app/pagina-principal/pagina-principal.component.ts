import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ProductoModelo } from '../modelos/producto.modelo';
import { NgForOf } from '@angular/common';
import { CarritoService } from '../services/carrito.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallesProductoComponent } from '../componentes/detalles-producto/detalles-producto.component';




@Component({
  selector: 'app-pagina-principal',
  imports: [
    NgForOf
  ],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements OnInit {

  protected productos: ProductoModelo[] = [];

  constructor(
    private productosService: ProductoService,
    private carritoService: CarritoService,
    private dialog: MatDialog // ← Añadido para abrir modales
  ) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }
  //
  // anyadirAlCarrito(producto: ProductoModelo) {
  //   this.carritoService.aniadirAlCarrito(producto).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // mostrarDetalles(producto: ProductoModelo) {
  //   // Método para mostrar detalles del producto en un diálogo
  //   this.dialog.open(DetallesProductoComponent, {
  //     width: '600px',
  //     data: producto
  //   });
  // }
  mostrarDetalles(producto: ProductoModelo) {
    this.dialog.open(DetallesProductoComponent, {
      width: '600px',
      maxHeight: '90vh',
      data: producto,
      autoFocus: false,
    });
  }

}





// import {Component, inject, OnInit} from '@angular/core';
// import {ProductoService} from '../services/producto.service';
// import {ProductoModelo} from '../modelos/producto.modelo';
// import {NgForOf} from '@angular/common';
// import {CarritoService} from '../services/carrito.service';
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
//   protected productos: ProductoModelo[] = [
//   ];
//
//   constructor(private productosService: ProductoService, private carritoService: CarritoService) {
//   }
//
//   ngOnInit() {
//     this.productosService.getProductos().subscribe(data => {
//      this.productos = data;
//      console.log(data);
//     });
//   }
//
//   // anyadirAlCarrito(producto: ProductoModelo) {
//   //   this.carritoService.aniadirAlCarrito(producto).subscribe(data => {
//   //     console.log(data);
//   //   });
//   // }
// }
