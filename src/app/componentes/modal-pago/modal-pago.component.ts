import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {CarritoModelo} from '../../modelos/carrito.modelo';

@Component({
  selector: 'app-modal-pago',
  imports: [
    NgIf
  ],
  templateUrl: './modal-pago.component.html',
  styles: ``
})
export class ModalPagoComponent implements OnInit {

  @Input() carritos!: CarritoModelo[];
  protected total: number = 0;

  isOpen = false;


  ngOnInit() {
    if (this.carritos) {
      this.carritos.forEach((carrito) => {
        this.total += carrito.precio;
        console.log(this.total);
      });
    }
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

}
