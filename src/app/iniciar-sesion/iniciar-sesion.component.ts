import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  iniciarSesionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.iniciarSesionForm = this.fb.group({
      nick: ['', [Validators.required, Validators.minLength(3)]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.iniciarSesionForm.valid) {
      console.log('Formulario válido:', this.iniciarSesionForm.value);
      // Aquí puedes agregar la lógica para autenticar al usuario
    } else {
      console.log('Formulario inválido');
    }
  }

  irARegistro(): void {
    this.router.navigate(['/registro-sesion']);
  }
}
