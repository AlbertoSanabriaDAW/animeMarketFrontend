import {Component, inject, OnInit} from '@angular/core';
import {ProductoService} from '../services/producto.service';
import {ProductoModelo} from '../modelos/producto.modelo';
import {NgForOf} from '@angular/common';
import {CarritoService} from '../services/carrito.service';

@Component({
  selector: 'app-pagina-principal',
  imports: [
    NgForOf
  ],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements OnInit {

  protected productos: ProductoModelo[] = [
  ];

  constructor(private productosService: ProductoService, private carritoService: CarritoService) {
  }

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => {
     this.productos = data;
     console.log(data);
    });
  }

  anyadirAlCarrito(producto: ProductoModelo) {
    this.carritoService.aniadirAlCarrito(producto).subscribe(data => {
      console.log(data);
    });
  }

  // productosBobobo(){
  //   this.productosService.getProductosBobobo().subscribe(data => {
  //     this.productos = data;
  //     console.log(data);
  //   });
  // }
}
