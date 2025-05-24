import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';
import {lastValueFrom} from 'rxjs';
import {UsuariosService} from '../services/usuariosService';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  iniciarSesionForm: FormGroup;
  errorMensaje: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.iniciarSesionForm = this.fb.group({
      nick: ['', [Validators.required, Validators.minLength(3)]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.iniciarSesionForm.invalid) {
      this.errorMensaje = 'Por favor, llena los campos correctamente';
      return;
    }

    const { nick, contrasenia } = this.iniciarSesionForm.value;

    this.authService.login(nick, contrasenia).subscribe({
      next: async (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('token', response.token); // Guardar JWT en LocalStorage
        this.router.navigate(['/dashboard']); // Redirigir después del login
      },
      error: (error) => {
        console.error('Error en login:', error);
        this.errorMensaje = 'Credenciales incorrectas';
      }
    });
  }

  irARegistro(): void {
    this.router.navigate(['/registro-sesion']);
  }
}
