import { Component, OnInit } from '@angular/core';
import { CarritoModelo } from '../modelos/carrito.modelo';
import {ModalPagoComponent} from '../componentes/modal-pago/modal-pago.component';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe, DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  imports: [
    ModalPagoComponent,
    FormsModule,
    NgForOf,
    NgIf,
    CurrencyPipe,
    DecimalPipe
  ]
})
export class CarritoComponent implements OnInit {
  constructor(private router: Router) {}
  carritos: CarritoModelo[] = [];
  total: number = 0;
  mostrarModalPago = false;

  ngOnInit(): void {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      try {
        this.carritos = JSON.parse(carritoGuardado).map((producto: any) => ({
          ...producto,
          precio: Number(producto.precio) || 0,
          cantidad: Number(producto.cantidad) || 1
        }));
        this.calcularTotal();
      } catch (error) {
        console.error('Error al parsear el carrito:', error);
      }
    }
  }

  abrirModalPago() {
    this.mostrarModalPago = true;
  }

  cerrarModalPago() {
    this.mostrarModalPago = false;
  }

  manejarCompraExitosa() {
    this.carritos = [];
    this.total = 0;
    localStorage.removeItem('carrito');
    this.cerrarModalPago();
  }

  calcularTotal(): void {
    this.total = this.carritos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    localStorage.setItem('carrito', JSON.stringify(this.carritos));
  }

  eliminarProducto(id: number): void {
    this.carritos = this.carritos.filter(item => item.id !== id);
    this.calcularTotal();
  }

  navigateTo(path: string): void {
    this.router.navigate(['/' + path]).then(success => {
      if (!success) {
        console.error(`Navegación a ${path} fallida.`);
      }
    });
  }

}
