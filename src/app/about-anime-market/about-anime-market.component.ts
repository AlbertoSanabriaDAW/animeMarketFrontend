import { Component } from '@angular/core';

@Component({
  selector: 'app-about-anime-market',
  templateUrl: './about-anime-market.component.html',
  styleUrls: ['./about-anime-market.component.css']
})
export class AboutAnimeMarketComponent {
  ownerName: string = 'Alberto Sanabria';
  location: string = 'Torre Sevilla, Sevilla, España';

  // description: string = `Bienvenido a AnimeMarket, tu tienda online de confianza donde podrás encontrar una amplia variedad de artículos temáticos inspirados en tus series de anime favoritas.
  // Desde figuras de colección hasta merchandising exclusivo, tenemos todo lo que un verdadero fan necesita.`;

  showMoreInfo(): void {
    console.log('Información adicional sobre AnimeMarket');
  }
}
