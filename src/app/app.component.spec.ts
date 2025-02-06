import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
      await TestBed.configureTestingModule({
        providers: [
          provideRouter([
            { path: 'registro-sesion', component: RegistroSesionComponent },
            { path: 'iniciar-sesion', component: IniciarSesionComponent }
          ])
        ],
        declarations: [AppComponent, RegistroSesionComponent, IniciarSesionComponent]
      }).compileComponents();

      router = TestBed.inject(Router); // ✅ Inyectamos el Router aquí
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AnimeMarkertFrontend' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AnimeMarkertFrontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AnimeMarkertFrontend');
  });

  it('should navigate to /registro-sesion', async () => {
    await router.navigate(['/registro-sesion']);
    expect(router.url).toBe('/registro-sesion');
  });

  it('should navigate to /iniciar-sesion', async () => {
    await router.navigate(['/iniciar-sesion']);
    expect(router.url).toBe('/iniciar-sesion');
  });
});
