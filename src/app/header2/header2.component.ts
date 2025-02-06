import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component {
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

  onCategoryChange(event: any) {
    console.log('Categoría seleccionada:', event.target.value);
  }
}
