import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito.service';
import {AuthService} from '../services/auth.service';
import {NgForOf} from '@angular/common';
import {PedidoService} from '../services/pedido.service';
import {CarritoModelo} from '../modelos/carrito.modelo';
import {ModalPagoComponent} from '../componentes/modal-pago/modal-pago.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [
    NgForOf,
    ModalPagoComponent,
    FormsModule
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  protected carritos!: CarritoModelo[];
  total: number = 0;

  constructor(
    private carritoService: CarritoService,
    private pedidoService: PedidoService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Al cargar el componente, obtenemos el carrito
    this.carritoService.obtenerCarrito().subscribe(data => {
      this.carritos = data;
      console.log(data);
      // Calculamos el total tras cargar
      this.calcularTotal();
    });
  }

  eliminarProducto(idProducto: number): void {
    this.carritoService.eliminarDelCarrito(idProducto).subscribe(
      response => {
        console.log(response.mensaje);
        this.obtenerCarrito(); // Refresca la lista después de eliminar y recalcula el total
      },
      error => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }

  // Refresca la lista del carrito y recalcula el total
  private obtenerCarrito() {
    this.carritoService.obtenerCarrito().subscribe(data => {
      this.carritos = data;
      console.log(data);
      this.calcularTotal(); // Se vuelve a calcular el total con la nueva lista
    });
  }
  incrementQuantity(carrito: any) {
    carrito.cantidad++;
    this.calculateTotal();
  }

  decrementQuantity(carrito: any) {
    if (carrito.cantidad > 1) {
      carrito.cantidad--;
      this.calculateTotal();
    }
  }

  updateQuantity(carrito: any) {
    if (carrito.cantidad < 1 || isNaN(carrito.cantidad)) {
      carrito.cantidad = 1;
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.carritos.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
  }

  // Calcula el total sumando (precio * cantidad) de cada item
  private calcularTotal(): void {
    this.total = this.carritos.reduce((acum, producto) => {
      return acum + (producto.precio * producto.cantidad);
    }, 0);
  }
}
