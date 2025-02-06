import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FooterComponent } from './footer/footer.component';
import { AboutAnimeMarketComponent } from './about-anime-market/about-anime-market.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

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
    IniciarSesionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AnimeMarkertFrontend';
}
