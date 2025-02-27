import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito.service';
import {AuthService} from '../services/auth.service';
import {NgForOf} from '@angular/common';
import {PedidoService} from '../services/pedido.service';
import {CarritoModelo} from '../modelos/carrito.modelo';

@Component({
  selector: 'app-carrito',
  imports: [
    NgForOf
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
  }

}
