import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductoModelo} from '../modelos/producto.modelo';
import {ProductoService} from '../services/producto.service';

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
  constructor(private productosService: ProductoService) {
  }

  ngOnInit() {
    this.productosService.getProductosDragonball().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }

  anyadirAlCarrito(producto: ProductoModelo): void {
    console.log('Añadiendo al carrito:', producto);
  }

}
