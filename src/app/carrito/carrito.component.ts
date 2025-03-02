import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito.service';
import {AuthService} from '../services/auth.service';
import {NgForOf} from '@angular/common';
import {PedidoService} from '../services/pedido.service';
import {CarritoModelo} from '../modelos/carrito.modelo';
import {ModalPagoComponent} from '../componentes/modal-pago/modal-pago.component';

@Component({
  selector: 'app-carrito',
  imports: [
    NgForOf,
    ModalPagoComponent
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  protected carritos!: CarritoModelo[];

  constructor(private carritoService: CarritoService, private pedidoService: PedidoService, private authService: AuthService) {}

  ngOnInit() {
    this.carritoService.obtenerCarrito().subscribe(data => {
      this.carritos = data;
      console.log(data);
    });
  }

  // ngOnInit() {
  //   this.carritoService.obtenerCarrito().subscribe({
  //     next: (response) => console.log(response),
  //     error: (error) => console.error(error)
  //   });
  // }

  comprar(){
    this.pedidoService.comprar(this.carritos[0].id_carrito).subscribe((data: any) => {
      console.log(this.carritos[0].id_carrito);
    });
  } // no se esta utilizando

  eliminarProducto(idProducto: number): void {
    this.carritoService.eliminarDelCarrito(idProducto).subscribe(
      response => {
        console.log(response.mensaje);
        this.obtenerCarrito(); // Refresca la lista después de eliminar
      },
      error => {
        console.error('Error al eliminar el producto:', error);
      }
    );
  }

  private obtenerCarrito() {
    this.carritoService.obtenerCarrito().subscribe(data => {
      this.carritos = data;
      console.log(data);
    });
  }
}
