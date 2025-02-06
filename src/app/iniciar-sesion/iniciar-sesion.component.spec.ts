import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './iniciar-sesion.component';

describe('IniciarSesionComponent', () => {
  let component: IniciarSesionComponent;
  let fixture: ComponentFixture<IniciarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSesionComponent ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('form should be invalid when empty', () => {
    expect(component.iniciarSesionForm.valid).toBeFalsy();
  });

  it('form should be valid when nick and contrasenia are provided', () => {
    component.iniciarSesionForm.controls['nick'].setValue('testuser');
    component.iniciarSesionForm.controls['contrasenia'].setValue('password123');
    expect(component.iniciarSesionForm.valid).toBeTruthy();
  });

  it('should log in with valid credentials', () => {
    spyOn(console, 'log');
    component.iniciarSesionForm.controls['nick'].setValue('testuser');
    component.iniciarSesionForm.controls['contrasenia'].setValue('password123');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Iniciando sesión con:', 'testuser', 'password123');
  });
});
