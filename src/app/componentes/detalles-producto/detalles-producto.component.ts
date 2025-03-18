import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoModelo } from '../../modelos/producto.modelo';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit {

  producto: ProductoModelo;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductoModelo) {
    this.producto = data;
  }

  ngOnInit(): void {
    console.log('Producto recibido:', this.producto);
  }

}
