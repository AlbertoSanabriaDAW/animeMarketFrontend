import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductoModelo} from '../modelos/producto.modelo';
import {ProductoService} from '../services/producto.service';

@Component({
  selector: 'app-tematica-doraemon',
  imports: [
    NgForOf
  ],
  templateUrl: './tematica-doraemon.component.html',
  styleUrl: './tematica-doraemon.component.css'
})
export class TematicaDoraemonComponent implements OnInit {

  protected productos: ProductoModelo[] = [

  ];
  constructor(private productosService: ProductoService) {
  }

  ngOnInit() {
    this.productosService.getProductosDoraemon().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }

  anyadirAlCarrito(producto: ProductoModelo): void {
    console.log('Añadiendo al carrito:', producto);
  }

}
