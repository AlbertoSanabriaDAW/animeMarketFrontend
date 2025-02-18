import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  imports: [
    NgIf,
    RouterLink
  ],
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  selectedCategory: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkSession();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUsername(): string {
    return localStorage.getItem('username') || 'Usuario';
  }

  login(): void {
    this.router.navigate(['/iniciar-sesion']);
  }

  register(): void {
    this.router.navigate(['/registro-sesion']); // Ruta original intacta
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/']); // Ruta original intacta
  }

  viewCart(): void {
    this.router.navigate(['/carrito']); // Ruta original intacta
  }

  checkSession(): void {
    if (this.isLoggedIn()) {
      console.log('Sesión activa para:', this.getUsername());
    } else {
      console.log('No hay sesión activa');
    }
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    console.log('Categoría seleccionada:', this.selectedCategory);
    this.router.navigate([`/tematica-${this.selectedCategory.toLowerCase().replace(' ', '-')}`]); // Ruta original intacta
  }
}
