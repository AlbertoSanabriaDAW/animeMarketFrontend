import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent implements OnInit {
  registroSesionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroSesionForm = this.fb.group({
      nick: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
      repetirContrasenia: ['', [Validators.required, Validators.minLength(6)]],
      perfil: [''],
      foto: [''],
      rol: ['0']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registroSesionForm.valid) {
      console.log('Formulario válido:', this.registroSesionForm.value);
      // Aquí puedes agregar la lógica para registrar al usuario
    } else {
      console.log('Formulario inválido');
    }
  }

  irAIniciarSesion(): void {
    this.router.navigate(['/iniciar-sesion']);
  }
}
