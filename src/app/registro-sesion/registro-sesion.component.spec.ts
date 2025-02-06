import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroSesionComponent } from './registro-sesion.component';

describe('RegistroSesionComponent', () => {
  let component: RegistroSesionComponent;
  let fixture: ComponentFixture<RegistroSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroSesionComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.registroForm.value).toEqual({
      nick: '',
      correo: '',
      contrasenia: '',
      repetirContrasenia: '',
      perfil: '',
      foto: '',
      rol: '0'
    });
  });

  it('should validate required fields', () => {
    component.registroForm.controls['nick'].setValue('');
    component.registroForm.controls['correo'].setValue('');
    component.registroForm.controls['contrasenia'].setValue('');
    component.registroForm.controls['repetirContrasenia'].setValue('');
    expect(component.registroForm.valid).toBeFalse();
  });

  it('should validate correct email format', () => {
    component.registroForm.controls['correo'].setValue('test@example.com');
    expect(component.registroForm.controls['correo'].valid).toBeTrue();
  });

  it('should require passwords to be at least 6 characters long', () => {
    component.registroForm.controls['contrasenia'].setValue('12345');
    component.registroForm.controls['repetirContrasenia'].setValue('12345');
    expect(component.registroForm.valid).toBeFalse();
  });

  it('should validate that passwords match', () => {
    component.registroForm.controls['contrasenia'].setValue('password123');
    component.registroForm.controls['repetirContrasenia'].setValue('password123');
    fixture.detectChanges();
    expect(component.registroForm.errors).toBeNull();
  });

  it('should prevent submission if passwords do not match', () => {
    component.registroForm.controls['contrasenia'].setValue('password123');
    component.registroForm.controls['repetirContrasenia'].setValue('differentpass');
    fixture.detectChanges();
    expect(component.registroForm.errors?.['mismatch']).toBeTruthy();
  });

  it('should prevent modification of rol field', () => {
    expect(component.registroForm.controls['rol'].disabled).toBeTrue();
  });

  it('should allow submission only if the form is valid', () => {
    component.registroForm.controls['nick'].setValue('UsuarioPrueba');
    component.registroForm.controls['correo'].setValue('correo@example.com');
    component.registroForm.controls['contrasenia'].setValue('password123');
    component.registroForm.controls['repetirContrasenia'].setValue('password123');
    component.registroForm.controls['perfil'].setValue('Perfil de prueba');
    component.registroForm.controls['foto'].setValue('https://example.com/foto.jpg');

    expect(component.registroForm.valid).toBeTrue();
  });
});
