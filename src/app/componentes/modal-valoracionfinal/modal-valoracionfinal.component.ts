import { Component, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-modal-valoracionfinal',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './modal-valoracionfinal.component.html',
  styles: ``
})
export class ModalValoracionfinalComponent implements OnInit {
  isOpen = false;
  rating: number | null = null;

  constructor() {}

  ngOnInit() {
    console.log('✅ ModalValoracionfinalComponent CARGADO');

    // 🔥 REGISTRAR LA FUNCIÓN EN WINDOW
    (window as any).abrirModalValoracion = () => {
      console.log('✅ Método abrirModal() ejecutado, mostrando modal de valoración');
      this.isOpen = true;
    };
  }

  close() {
    console.log('🔴 Cerrando modal de valoración');
    this.isOpen = false;
  }

  seleccionarValor(valor: number) {
    this.rating = valor;
  }

  enviarValoracion() {
    if (this.rating !== null) {
      console.log('✅ Valoración enviada:', this.rating);
      alert(`Gracias por tu valoración de ${this.rating} estrellas`);
      this.close();

      setTimeout(() => {
        console.log('🚀 Redirigiendo al usuario a la página de inicio...');
        window.location.href = "/"; // 🔥 FORZAMOS la redirección
      }, 1000);
    } else {
      console.log('❌ Debe seleccionar un valor antes de enviar');
      alert('Por favor, selecciona una valoración antes de enviar.');
    }
  }
}
