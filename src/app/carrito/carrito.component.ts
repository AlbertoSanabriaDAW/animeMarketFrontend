import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito.service';
import {AuthService} from '../services/auth.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [
    NgForOf
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  carritos: any;

  constructor(private carritoService: CarritoService, private authService: AuthService) {}

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

}
