import {Component, OnInit} from '@angular/core';
import {UsuariosService} from '../services/usuariosService';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) {
  }
  categories: string[] = [
    'Todas las temáticas',
    'Bobobo',
    'Pokemon',
    'Kimetsu no Yaiba',
    'Doraemon',
    'Dragon Ball'
  ];

  selectedCategory: string = this.categories[0];
  usuarios: any[] = [];

  ngOnInit() {
    this.prueba();
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    console.log('Categoría seleccionada:', this.selectedCategory);
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Buscando:', inputElement.value);
  }

  login(): void {
    console.log('Redirigiendo a la página de inicio de sesión o registro');
  }

  viewCart(): void {
    console.log('Mostrando el carrito de compras');
  }

  prueba(): void {
    console.log('Prueba');
    this.usuariosService.getUsuarios().subscribe((usuarios) => {
      console.log(usuarios);
      this.usuarios = usuarios;
    });
  }
}
