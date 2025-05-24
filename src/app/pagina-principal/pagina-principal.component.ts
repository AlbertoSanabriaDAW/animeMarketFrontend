import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ProductoModelo } from '../modelos/producto.modelo';
import { CarritoService } from '../services/carrito.service';
import { MatDialog } from '@angular/material/dialog';
import { DetallesProductoComponent } from '../componentes/detalles-producto/detalles-producto.component';
import { CrearProductoComponent } from '../componentes/crear-producto/crear-producto.component';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {CarritoModelo} from '../modelos/carrito.modelo';
import {lastValueFrom, Observable} from 'rxjs';
import {UsuariosService} from '../services/usuariosService';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReseniasModelo} from '../modelos/resenias.modelo';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  imports: [
    CrearProductoComponent,
    NgForOf,
    CurrencyPipe,
    NgIf
  ],
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  rolUsuario: number = 0; // 0: Usuario, 1: Administrador
  productos: ProductoModelo[] = [];
  mostrarCrearProducto: boolean = false;

  constructor(
    private productosService: ProductoService,
    private carritoService: CarritoService,
    private dialog: MatDialog,
    private usuariosService: UsuariosService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.cargarProductos();
    this.cargarRolUsuario();
  }

  async cargarRolUsuario() {
    const detallesDelUsuario: any = await lastValueFrom(this.usuariosService.obtenerDetallesUsuario());

    localStorage.setItem('nick', detallesDelUsuario.nick);
    localStorage.setItem('rol', detallesDelUsuario.rol);

    // Verifica el rol del usuario
    this.rolUsuario = Number(localStorage.getItem('rol')) ?? 0;
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


  eliminarProducto(producto: ProductoModelo) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `/api/productos/eliminar/${producto.id}`;

    console.log(`Eliminando producto con ID: ${producto.id}`);

    this.http.delete(url, { headers }).subscribe({
      next: (response) => {
        console.log('Producto eliminado exitosamente:', response);
        this.cargarProductos(); // Recargar productos después de eliminar uno
      },
      error: (error) => {
        console.error('Error al eliminar producto:', error);
      }
    })
  }
}


