import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carritos: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      try {
        this.carritos = JSON.parse(carritoGuardado);

        // Asegúrate de que cada producto tiene un precio y cantidad válidos
        this.carritos = this.carritos.map(producto => ({
          ...producto,
          precio: Number(producto.precio) || 0,
          cantidad: Number(producto.cantidad) || 1
        }));

        this.calcularTotal();
      } catch (error) {
        console.error('Error al parsear el carrito:', error);
      }
    }
  }

  calcularTotal(): void {
    this.total = this.carritos.reduce((acc, producto) => {
      const precio = Number(producto.precio);
      const cantidad = Number(producto.cantidad);

      if (isNaN(precio) || isNaN(cantidad)) {
        console.error(`Producto inválido:`, producto);
        return acc;
      }

      return acc + (precio * cantidad);
    }, 0);
    this.guardarCarrito();
  }

  eliminarProducto(id: number): void {
    // Filtra el carrito eliminando el producto seleccionado
    this.carritos = this.carritos.filter(item => item.id !== id);

    // Actualiza el carrito en el localStorage
    localStorage.setItem('carrito', JSON.stringify(this.carritos));

    // Recalcula el total después de la eliminación
    this.calcularTotal();
  }



  comprar(): void {
    if (this.carritos.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    alert("Compra realizada con éxito.");
    localStorage.removeItem('carrito');
    this.carritos = [];
    this.total = 0;
  }

  guardarCarrito(): void {
    localStorage.setItem('carrito', JSON.stringify(this.carritos));
  }
}
