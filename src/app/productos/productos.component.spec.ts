// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ProductosComponent } from './productos.component';
// import { FormsModule } from '@angular/forms';
// import { NgFor, NgIf } from '@angular/common';
// import {provideHttpClient} from '@angular/common/http';
//
// describe('ProductosComponent', () => {
//   let component: ProductosComponent;
//   let fixture: ComponentFixture<ProductosComponent>;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ProductosComponent, FormsModule, NgFor, NgIf],
//       providers: [provideHttpClient()]
//     }).compileComponents();
//   });
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductosComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should filter products correctly', () => {
//     component.products.set([
//       { id: 1, nombre: 'Producto 1', imagen: '', descripcion: '', precio: 10 },
//       { id: 2, nombre: 'Producto 2', imagen: '', descripcion: '', precio: 20 }
//     ]);
//     component.searchTerm.set('1');
//     expect(component.filteredProducts().length).toBe(1);
//   });
//
//   it('should add and remove products from cart', () => {
//     const product = { id: 1, nombre: 'Producto 1', imagen: '', descripcion: '', precio: 10 };
//     component.addToCart(product);
//     expect(component.cartItems().length).toBe(1);
//
//     component.removeFromCart(0);
//     expect(component.cartItems().length).toBe(0);
//   });
// });
