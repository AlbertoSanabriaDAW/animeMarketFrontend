import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductoModelo} from '../modelos/producto.modelo';
import {ProductoService} from '../services/producto.service';

@Component({
  selector: 'app-tematica-kimetsu',
  imports: [
    NgForOf
  ],
  templateUrl: './tematica-kimetsu.component.html',
  styleUrl: './tematica-kimetsu.component.css'
})
export class TematicaKimetsuComponent implements OnInit {

  protected productos: ProductoModelo[] = [

  ];
  constructor(private productosService: ProductoService) {
  }

  ngOnInit() {
    this.productosService.getProductosKimetsu().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }

  anyadirAlCarrito(producto: ProductoModelo): void {
    console.log('Añadiendo al carrito:', producto);
  }

}
