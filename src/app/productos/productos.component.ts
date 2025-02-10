// import { Component, signal, WritableSignal } from '@angular/core';
// import {DecimalPipe, NgFor, NgIf} from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
//
// interface Producto {
//   id: number;
//   nombre: string;
//   imagen: string;
//   descripcion: string;
//   precio: number;
// }
//
// @Component({
//   standalone: true,
//   selector: 'app-productos',
//   templateUrl: './productos.component.html',
//   styleUrls: ['./productos.component.css'],
//   imports: [NgFor, NgIf, FormsModule, DecimalPipe]
// })
// export class ProductosComponent {
//   products: WritableSignal<Producto[]> = signal([]);
//   searchTerm: WritableSignal<string> = signal('');
//   cartItems: WritableSignal<Producto[]> = signal([]);
//
//   constructor(private http: HttpClient) {
//     this.http.get<Producto[]>('/all').subscribe(
//       (data) => this.products.set(data),
//       (error) => console.error('Error fetching products:', error)
//     );
//   }
//
//   filteredProducts(): Producto[] {
//     return this.products().filter(product =>
//       product.nombre.toLowerCase().includes(this.searchTerm().toLowerCase())
//     );
//   }
//
//   addToCart(product: Producto): void {
//     this.cartItems.set([...this.cartItems(), product]);
//   }
//
//   removeFromCart(index: number): void {
//     const updatedCart = [...this.cartItems()];
//     updatedCart.splice(index, 1);
//     this.cartItems.set(updatedCart);
//   }
// }
