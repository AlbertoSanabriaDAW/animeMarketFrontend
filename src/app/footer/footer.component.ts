import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate(['/' + path]).then(success => {
      if (!success) {
        console.error(`Navegación a ${path} fallida.`);
      }
    });
  }
}
