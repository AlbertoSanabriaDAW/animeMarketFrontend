import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductoModelo} from '../modelos/producto.modelo';
import {ProductoService} from '../services/producto.service';
import {CarritoService} from '../services/carrito.service';

@Component({
  selector: 'app-tematica-bobobo',
    imports: [
        NgForOf
    ],
  templateUrl: './tematica-bobobo.component.html',
  styleUrl: './tematica-bobobo.component.css'
})
export class TematicaBoboboComponent implements OnInit {

  protected productos: ProductoModelo[] = [
  ];

  constructor(private productosService: ProductoService, private carritoService: CarritoService) {
  }

  ngOnInit() {
    this.productosService.getProductosBobobo().subscribe(data => {
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
