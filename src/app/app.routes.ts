import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AboutAnimeMarketComponent } from './about-anime-market/about-anime-market.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import {TerminosCondicionesComponent} from './terminos-condiciones/terminos-condiciones.component';
import {PoliticaPrivacidadComponent} from './politica-privacidad/politica-privacidad.component';
import {ContactoComponent} from './contacto/contacto.component';
import {TematicaBoboboComponent} from './tematica-bobobo/tematica-bobobo.component';
import {TematicaDoraemonComponent} from './tematica-doraemon/tematica-doraemon.component';
import {TematicaDragonBallComponent} from './tematica-dragon-ball/tematica-dragon-ball.component';
import {TematicaKimetsuComponent} from './tematica-kimetsu/tematica-kimetsu.component';
import {TematicaPokemonComponent} from './tematica-pokemon/tematica-pokemon.component';
// import {ProductosComponent} from './productos/productos.component';

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent, pathMatch: 'full' },
  { path: 'about-anime-market', component: AboutAnimeMarketComponent },
  { path: 'registro-sesion', component: RegistroSesionComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'terminos-condiciones', component: TerminosCondicionesComponent },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'tematica-bobobo', component: TematicaBoboboComponent},
  { path: 'tematica-doraemon', component: TematicaDoraemonComponent},
  { path: 'tematica-dragon-ball', component: TematicaDragonBallComponent},
  { path: 'tematica-kimetsu-no-yaiba', component: TematicaKimetsuComponent},
  { path: 'tematica-pokemon', component: TematicaPokemonComponent},
  // { path: 'productos', component: ProductosComponent},
  { path: '**', redirectTo: '' }  // Redirige rutas no encontradas a la página principal
];
