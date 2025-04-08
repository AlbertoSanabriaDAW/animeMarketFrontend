import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { miscomprasModelo } from '../modelos/miscompras.modelo';

@Injectable({
  providedIn: 'root'
})
export class MiscomprasService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  obtenerCompras(): Observable<miscomprasModelo[]> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token no disponible');
      return throwError(() => new Error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    console.log('Haciendo petición a:', `${this.apiUrl}/carritos/comprados`);
    console.log('Token usado:', token);

    return this.http.get<miscomprasModelo[]>(`${this.apiUrl}/carritos/comprados`, { headers });
  }
}

// // src/app/services/miscompras.service.ts
//
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { miscomprasModelo } from '../modelos/miscompras.modelo';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class MiscomprasService {
//
//   private apiUrl = '/api';
//
//   constructor(private http: HttpClient) {}
//
//   obtenerCompras(): Observable<miscomprasModelo[]> {
//     const token = localStorage.getItem('token');
//
//     if (!token) {
//       console.error('Token no disponible');
//       return throwError(() => new Error('No autenticado'));
//     }
//
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`
//     });
//
//     return this.http.get<miscomprasModelo[]>(`${this.apiUrl}/carritos/comprados`, { headers });
//   }
// }
