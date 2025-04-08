import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ProductoModelo } from '../modelos/producto.modelo';
import { CarritoService } from '../services/carrito.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallesProductoComponent } from '../componentes/detalles-producto/detalles-producto.component';
import { CrearProductoComponent } from '../componentes/crear-producto/crear-producto.component';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {CarritoModelo} from '../modelos/carrito.modelo';

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
  aniadirProductoAlCarrito(producto: ProductoModelo) {
    this.carritoService.aniadirAlCarrito(producto).subscribe({
      next: (response) => {
        console.log('Producto agregado al carrito:', response);
        this.actualizarCarrito(); // Actualiza la vista del carrito después de agregar un producto
      },
      error: (error) => console.error('Error al agregar producto al carrito:', error)
    });
  }

  actualizarCarrito() {
    this.carritoService.obtenerCarrito().subscribe({
      next: (carrito: CarritoModelo[]) => {
        this.productos = carrito.map(item => item.producto); // Asumiendo que cada item tiene un campo 'producto' del tipo ProductoModelo
        console.log(this.productos); // Para asegurarte que estás obteniendo lo correcto
      },
      error: (error) => console.error('Error al actualizar carrito:', error)
    });
  }


}


