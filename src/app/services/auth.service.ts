import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/usuarios/login';
  // private apiUrl = 'http://localhost:8000/api/usuarios/login';

  constructor(private http: HttpClient) {}

  login(nick: string, contrasenia: string): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrl, { nick, contrasenia }).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
