import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CarritoModelo} from '../../modelos/carrito.modelo';

@Component({
  selector: 'app-modal-pago',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './modal-pago.component.html',
  styles: ``
})
export class ModalPagoComponent implements OnInit, OnChanges {

  @Input() carritos!: CarritoModelo[];
  protected total: number = 0;
  isOpen = false;

  ngOnInit() {
    console.log('ngOnInit ejecutado, carritos:', this.carritos);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['carritos'] && this.carritos) {
      console.log('ngOnChanges detectó cambios en carritos:', this.carritos);
      this.calcularTotal();
    }
  }

  calcularTotal(): void {
    this.total = this.carritos.reduce((acc, carrito) => acc + carrito.precio * carrito.cantidad, 0);
    console.log('Total calculado:', this.total);
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  redigirAInicio() {
    window.location.href = '/';
  }

  comprar() {
    window.alert("Compra realizada con éxito");
    this.redigirAInicio();
  }
}

// import {Component, Input, OnInit} from '@angular/core';
// import {NgForOf, NgIf} from '@angular/common';
// import {CarritoModelo} from '../../modelos/carrito.modelo';
//
// @Component({
//   selector: 'app-modal-pago',
//   imports: [
//     NgIf,
//     NgForOf
//   ],
//   templateUrl: './modal-pago.component.html',
//   styles: ``
// })
// export class ModalPagoComponent implements OnInit {
//
//   @Input() carritos!: CarritoModelo[];
//   protected total: number = 0;
//
//   isOpen = false;
//
//
//   ngOnInit() {
//     if (this.carritos) {
//       this.carritos.forEach((carrito) => {
//         this.total += carrito.precio;
//         console.log(this.total);
//       });
//     }
//   }
//
//   open() {
//     this.isOpen = true;
//   }
//
//   close() {
//     this.isOpen = false;
//   }
//
// }
