import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegistroUsuario} from '../modelos/usuario.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {
  }
  getUsuarios(): Observable<any[]> {
    // Aquí se haría una petición HTTP a un servidor
    const usuarios = this.http.get<any[]>('/usuarios/all');
    return usuarios;
  }

  registroUsuario(usuario: RegistroUsuario): Observable<RegistroUsuario> {
    // Aquí se haría una petición HTTP a un servidor
    const usuarioRegistrado = this.http.post<RegistroUsuario>('/api/usuarios/registro', usuario);
    return usuarioRegistrado;
  }

  loginUsuario(usuario: RegistroUsuario): Observable<RegistroUsuario> {
    // Aquí se haría una petición HTTP a un servidor
    const usuarioLogeado = this.http.post<RegistroUsuario>('/api/usuarios/login', usuario);
    return usuarioLogeado;
  }
}
