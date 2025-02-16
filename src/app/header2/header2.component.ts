import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
  private selectedCategory!: string;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/iniciar-sesion']); // Redirige correctamente a IniciarSesionComponent
  }

  register() {
    this.router.navigate(['/registro-sesion']); // Redirige correctamente a RegistroSesionComponent
  }

  viewCart() {
    console.log('Ir al carrito');
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    console.log('Categoría seleccionada:', this.selectedCategory);
    this.router.navigate([`/tematica-${this.selectedCategory.toLowerCase().replace(' ', '-')}`]);
  }
}
