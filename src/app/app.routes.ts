import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AboutAnimeMarketComponent } from './about-anime-market/about-anime-market.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent, pathMatch: 'full' },
  { path: 'about-anime-market', component: AboutAnimeMarketComponent },
  { path: 'registro-sesion', component: RegistroSesionComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '**', redirectTo: '' }  // Redirige rutas no encontradas a la página principal
];
