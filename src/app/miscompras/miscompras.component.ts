import { Component, OnInit } from '@angular/core';
import { MiscomprasService } from '../services/miscompras.service';
import { miscomprasModelo } from '../modelos/miscompras.modelo';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-miscompras',
  templateUrl: './miscompras.component.html',
  imports: [
    NgIf,
    NgForOf,
    DecimalPipe
  ],
  styleUrls: ['./miscompras.component.css']
})
export class MiscomprasComponent implements OnInit {
  compras: miscomprasModelo[] = [];

  constructor(private miscomprasService: MiscomprasService) {}

  ngOnInit(): void {
    this.obtenerMisCompras();
  }

  obtenerMisCompras(): void {
    console.log('Iniciando la carga de compras desde el backend...');

    this.miscomprasService.obtenerCompras().subscribe({
      next: (data) => {
        console.log('✅ Compras cargadas con éxito: ', data);
        this.compras = data;
      },
      error: (err) => {
        console.error('❌ Error al cargar las compras: ', err);
        if (err.status === 500) {
          alert('Error del servidor. Por favor revisa la consola o el backend.');
        } else if (err.status === 401) {
          alert('No autenticado. Por favor, inicia sesión nuevamente.');
        } else {
          alert('Ocurrió un error al cargar las compras.');
        }
      }
    });
  }
}
