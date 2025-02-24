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
    // },
    // {
    //   "id": 5,
    //   "nombre": "Figura Goku Super Saiyajin",
    //   "descripcion": "Figura de Goku transformado en Super Saiyajin.",
    //   "precio": 49.99,
    //   "imagen": "http://example.com/goku.jpg",
    //   "id_tematica": 2
    // },
    // {
    //   "id": 6,
    //   "nombre": "Radar del Dragon",
    //   "descripcion": "Réplica funcional del Radar del Dragón.",
    //   "precio": 34.99,
    //   "imagen": "http://example.com/radar_dragon.jpg",
    //   "id_tematica": 2
    // },
    // {
    //   "id": 7,
    //   "nombre": "Esfera del Dragon (4 estrellas)",
    //   "descripcion": "Réplica detallada de la esfera del dragón de 4 estrellas.",
    //   "precio": 19.99,
    //   "imagen": "http://example.com/esfera_4.jpg",
    //   "id_tematica": 2
    // },
    // {
    //   "id": 8,
    //   "nombre": "Pintalabios de Freezer",
    //   "descripcion": "Edición limitada del pintalabios inspirado en Freezer.",
    //   "precio": 14.99,
    //   "imagen": "http://example.com/pintalabios_freezer.jpg",
    //   "id_tematica": 2
    // },
    // {
    //   "id": 9,
    //   "nombre": "Bolsillo de Doraemon",
    //   "descripcion": "Réplica del mágico bolsillo de Doraemon.",
    //   "precio": 29.99,
    //   "imagen": "http://example.com/doraemon_bolsillo.jpg",
    //   "id_tematica": 3
    // },
    // {
    //   "id": 10,
    //   "nombre": "Baniera de Shizuka",
    //   "descripcion": "Mini réplica de la bañera de Shizuka.",
    //   "precio": 39.99,
    //   "imagen": "http://example.com/shizuka_banera.jpg",
    //   "id_tematica": 3
    // },
    // {
    //   "id": 11,
    //   "nombre": "Calificaciones de Nobita",
    //   "descripcion": "Colección de las peores calificaciones de Nobita.",
    //   "precio": 9.99,
    //   "imagen": "http://example.com/nobita_calificaciones.jpg",
    //   "id_tematica": 3
    // },
    // {
    //   "id": 12,
    //   "nombre": "Microfono de Gigante",
    //   "descripcion": "Micrófono inspirado en las canciones (desafinadas) de Gigante.",
    //   "precio": 19.99,
    //   "imagen": "http://example.com/microfono_gigante.jpg",
    //   "id_tematica": 3
    // },
    // {
    //   "id": 13,
    //   "nombre": "Figura de Pikachu",
    //   "descripcion": "Figura adorable de Pikachu.",
    //   "precio": 34.99,
    //   "imagen": "http://example.com/pikachu_peluche.jpg",
    //   "id_tematica": 4
    // },
    // {
    //   "id": 14,
    //   "nombre": "Pokeball",
    //   "descripcion": "Pokeball clásica, ideal para cualquier entrenador.",
    //   "precio": 24.99,
    //   "imagen": "http://example.com/pokeball.jpg",
    //   "id_tematica": 4
    // },
    // {
    //   "id": 15,
    //   "nombre": "Tinder de Brock",
    //   "descripcion": "Edición especial de la app Tinder donde solo salen enfermeras y policías.",
    //   "precio": 29.99,
    //   "imagen": "http://example.com/tinder_brock.jpg",
    //   "id_tematica": 4
    // },
    // {
    //   "id": 16,
    //   "nombre": "Peluchon de Vaporeon",
    //   "descripcion": "Peluche suave de Vaporeon con los movimientos armadura ácida, hidrochorro y acuacola.",
    //   "precio": 69.00,
    //   "imagen": "http://example.com/vaporeon.jpg",
    //   "id_tematica": 4
    // },
    // {
    //   "id": 17,
    //   "nombre": "Espada Nichirin de Tanjiro",
    //   "descripcion": "Réplica detallada de la espada Nichirin de Tanjiro.",
    //   "precio": 59.99,
    //   "imagen": "http://example.com/nichirin_tanjiro.jpg",
    //   "id_tematica": 5
    // },
    // {
    //   "id": 18,
    //   "nombre": "Mascara de Sabito",
    //   "descripcion": "Réplica de la máscara de Sabito.",
    //   "precio": 19.99,
    //   "imagen": "http://example.com/sabito_mascara.jpg",
    //   "id_tematica": 5
    // },
    // {
    //   "id": 19,
    //   "nombre": "Figura Nezuko",
    //   "descripcion": "Figura coleccionable de Nezuko Kamado.",
    //   "precio": 39.99,
    //   "imagen": "http://example.com/nezuko.jpg",
    //   "id_tematica": 5
    // },
    // {
    //   "id": 20,
    //   "nombre": "Kimono de Hashira",
    //   "descripcion": "Kimono inspirado en los Hashira del anime.",
    //   "precio": 49.99,
    //   "imagen": "http://example.com/hashira_kimono.jpg",
    //   "id_tematica": 5
    // }
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

  productosBobobo(){
    this.productosService.getProductosBobobo().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }
}
