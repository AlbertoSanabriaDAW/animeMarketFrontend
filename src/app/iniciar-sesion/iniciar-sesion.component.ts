import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UsuariosService} from '../services/usuariosService';

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

  constructor(private fb: FormBuilder, private router: Router, private usuariosService: UsuariosService) {
    this.iniciarSesionForm = this.fb.group({
      nick: ['', [Validators.required, Validators.minLength(3)]],
      contrasenia: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.iniciarSesionForm.valid) {
      console.log('Formulario válido:', this.iniciarSesionForm.value);
      this.usuariosService.loginUsuario(this.iniciarSesionForm.value).subscribe((usuario) => {
        console.log('Usuario logeado:', usuario);
        this.router.navigate(['/']);
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  irARegistro(): void {
    this.router.navigate(['/registro-sesion']);
  }

}
