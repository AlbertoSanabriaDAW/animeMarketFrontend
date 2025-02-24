import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito.service';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  constructor(private carritoService: CarritoService, private authService: AuthService) {}

  ngOnInit() {
    this.carritoService.obtenerCarrito(this.authService.getUserId()).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error)
    });
  }

}
