import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarritoModelo } from '../../modelos/carrito.modelo';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  //styleUrls: ['./modal-pago.component.css']
})
export class ModalPagoComponent {

  @Input() carritos: CarritoModelo[] = [];
  @Input() mostrarModalPago: boolean = false;  // ✅ Declarado como Input correctamente
  @Output() cerrarModal = new EventEmitter<void>();
  @Output() compraExitosa = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  get total(): number {
    return this.carritos.reduce((acc, carrito) => acc + carrito.precio * carrito.cantidad, 0);
  }

  comprar() {
    console.log('🟢 Botón "Comprar" presionado');

    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };

    this.http.delete('/api/carritoproductos/carrito/limpiar', { headers }).subscribe(
      () => {
        console.log('✅ Carrito limpiado con éxito');
        this.compraExitosa.emit();
      },
      (error) => {
        console.error('❌ Error al limpiar el carrito', error);
      }
    );
  }
}
