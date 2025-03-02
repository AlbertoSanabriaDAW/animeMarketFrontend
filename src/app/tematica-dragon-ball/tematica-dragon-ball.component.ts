import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductoModelo} from '../modelos/producto.modelo';
import {ProductoService} from '../services/producto.service';
import {CarritoService} from '../services/carrito.service';

@Component({
  selector: 'app-tematica-dragon-ball',
  imports: [
    NgForOf
  ],
  templateUrl: './tematica-dragon-ball.component.html',
  styleUrl: './tematica-dragon-ball.component.css'
})
export class TematicaDragonBallComponent implements OnInit {

  protected productos: ProductoModelo[] = [
  ];

  constructor(private productosService: ProductoService, private carritoService: CarritoService) {
  }

  ngOnInit() {
    this.productosService.getProductosDragonball().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }

  anyadirAlCarrito(producto: ProductoModelo) {
    this.carritoService.aniadirAlCarrito(producto).subscribe(data => {
      console.log(data);
    });
  }

}
