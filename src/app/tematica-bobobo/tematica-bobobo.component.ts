import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductoModelo} from '../modelos/producto.modelo';
import {ProductoService} from '../services/producto.service';

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
    // {
    //   "id": 1,
    //   "nombre": "Peluca de Bobobo",
    //   "descripcion": "Réplica de la icónica peluca de Bobobo.",
    //   "precio": 39.99,
    //   "imagen": "/Icon-Twitter.jpg",
    //   "id_tematica": 1
    // },
    // {
    //   "id": 2,
    //   "nombre": "Crema Solar Don Patch",
    //   "descripcion": "Protección solar con el estilo excéntrico de Don Patch.",
    //   "precio": 29.99,
    //   "imagen": "http://example.com/crema_don_patch.jpg",
    //   "id_tematica": 1
    // },
    // {
    //   "id": 3,
    //   "nombre": "Pelo Nasal Sabroson",
    //   "descripcion": "Réplica del icónico pelo nasal de Bobobo en acción.",
    //   "precio": 99.99,
    //   "imagen": "http://example.com/pelo_nasal.jpg",
    //   "id_tematica": 1
    // },
    // {
    //   "id": 4,
    //   "nombre": "Heladito Rosa",
    //   "descripcion": "Figura del mítico Heladito Rosa de Bobobo.",
    //   "precio": 2.99,
    //   "imagen": "http://example.com/heladito_rosa.jpg",
    //   "id_tematica": 1
    // }
  ];
  constructor(private productosService: ProductoService) {
  }

  ngOnInit() {
    this.productosService.getProductosBobobo().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }

  anyadirAlCarrito(producto: ProductoModelo): void {
    console.log('Añadiendo al carrito:', producto);
  }

}
