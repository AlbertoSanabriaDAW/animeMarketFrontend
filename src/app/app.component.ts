import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FooterComponent } from './footer/footer.component';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    Header2Component,
    PaginaPrincipalComponent,
    FooterComponent,
    AboutAnimeMarketComponent,
    RegistroSesionComponent,
    IniciarSesionComponent,
    TerminosCondicionesComponent,
    PoliticaPrivacidadComponent,
    ContactoComponent,
    TematicaBoboboComponent,
    TematicaDoraemonComponent,
    TematicaDragonBallComponent,
    TematicaKimetsuComponent,
    TematicaPokemonComponent,
    // ProductosComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimeMarkertFrontend';
}
