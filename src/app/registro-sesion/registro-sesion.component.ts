import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent {
  registroForm: FormGroup;
  errorMensaje: string = '';
  exitoMensaje: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registroForm = this.fb.group({
      nick: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
      repetirContrasenia: ['', [Validators.required]],
      perfil: [''],
      foto: [''],
      rol: ['0']
    }, { validators: this.passwordsCoinciden });
  }

  /**
   * Valida si las contraseñas coinciden
   */
  passwordsCoinciden(control: AbstractControl): ValidationErrors | null {
    const contrasenia = control.get('contrasenia')?.value;
    const repetirContrasenia = control.get('repetirContrasenia')?.value;

    return contrasenia && repetirContrasenia && contrasenia !== repetirContrasenia
      ? { notMatching: true }
      : null;
  }

  onSubmit() {
    if (this.registroForm.invalid) return;

    const { nick, correo, contrasenia, perfil, foto, rol } = this.registroForm.value;

    this.authService.register({ nick, correo, contrasenia, perfil, foto, rol }).subscribe({
      next: () => {
        this.exitoMensaje = 'Registro exitoso. Redirigiendo a Iniciar Sesión...';
        setTimeout(() => {
          this.router.navigate(['/iniciar-sesion']);
        }, 2000);
      },
      error: () => {
        this.errorMensaje = 'Error al registrar usuario. Inténtalo nuevamente.';
      }
    });
  }

  irAIniciarSesion() {
    this.router.navigate(['/iniciar-sesion']);
  }
}
