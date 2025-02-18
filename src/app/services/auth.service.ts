import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrlLogin = 'api/usuarios/login';
  private apiUrlRegister = 'api/usuarios/register';
  // private apiUrlLogin = 'http://localhost:8000/api/usuarios/login';
  // private apiUrlRegister = 'http://localhost:8000/api/usuarios/register';

  constructor(private http: HttpClient) {}

  /**
   * Método para iniciar sesión
   * @param nick - Nombre de usuario
   * @param contrasenia - Contraseña del usuario
   * @returns Observable con la respuesta del servidor
   */
  login(nick: string, contrasenia: string): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrlLogin, { nick, contrasenia }).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }

  /**
   * Método para registrar un nuevo usuario
   * @param userData - Datos del usuario a registrar
   * @returns Observable con la respuesta del servidor
   */
  register(userData: { nick: string, correo: string, contrasenia: string, perfil?: string, foto?: string, rol?: string }): Observable<any> {
    return this.http.post<{ message: string }>(this.apiUrlRegister, userData);
  }

  /**
   * Método para cerrar sesión
   */
  logout(): void {
    localStorage.removeItem('token');
  }

  /**
   * Método para obtener el token almacenado en el localStorage
   * @returns Token de autenticación o null si no existe
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Método para verificar si el usuario está autenticado
   * @returns True si hay un token, False si no
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
