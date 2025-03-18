import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { CarritoModelo } from '../../modelos/carrito.modelo';
import { CarritoService } from '../../services/carrito.service';
import { ModalService } from '../../services/modal.service';
import {ModalValoracionfinalComponent} from '../modal-valoracionfinal/modal-valoracionfinal.component';

@Component({
  selector: 'app-modal-pago',
  imports: [
    NgIf,
    NgForOf,
    ModalValoracionfinalComponent
  ],
  templateUrl: './modal-pago.component.html',
  styles: ``
})
export class ModalPagoComponent implements OnInit, OnChanges {

  @Input() carritos!: CarritoModelo[];
  protected total: number = 0;
  isOpen = false;

  constructor(private carritoService: CarritoService, private modalService: ModalService) {}

  ngOnInit() {
    console.log('✅ ModalPagoComponent inicializado');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['carritos'] && this.carritos) {
      console.log('📌 Cambios detectados en carritos:', this.carritos);
      this.calcularTotal();
    }
  }

  calcularTotal(): void {
    this.total = this.carritos.reduce((acc, carrito) => acc + carrito.precio * carrito.cantidad, 0);
    console.log('🟢 Total calculado:', this.total);
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  comprar() {
    console.log('🟢 Botón "Comprar" presionado');

    this.carritoService.limpiarCarrito().subscribe(
      () => {
        console.log('✅ Carrito limpiado con éxito');
        this.carritos = [];
        this.total = 0;

        setTimeout(() => {
          console.log('📌 FORZANDO apertura del modal de valoración');

          // 🔥 Llamamos al modal usando window directamente
          (window as any).abrirModalValoracion();
        }, 200);
      },
      (error) => {
        console.error('❌ Error al limpiar el carrito', error);
      }
    );
  }


}
