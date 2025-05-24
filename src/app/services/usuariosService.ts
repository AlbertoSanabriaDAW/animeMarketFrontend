import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {RegistroUsuario} from '../modelos/usuario.modelo';
// import {ProductoModelo} from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {
  }
  getUsuarios(): Observable<any[]> {
    // Aquí se haría una petición HTTP a un servidor
    const usuarios = this.http.get<any[]>('/usuarios/all');
    return usuarios;
  }

  // registroUsuario(usuario: RegistroUsuario): Observable<RegistroUsuario> {
  //   // Aquí se haría una petición HTTP a un servidor
  //   const usuarioRegistrado = this.http.post<RegistroUsuario>('/usuarios/registro', usuario);
  //   return usuarioRegistrado;
  // }
  //
  // loginUsuario(usuario: RegistroUsuario): Observable<RegistroUsuario> {
  //   // Aquí se haría una petición HTTP a un servidor
  //   const usuarioLogeado = this.http.post<RegistroUsuario>('/usuarios/login', usuario);
  //   return usuarioLogeado;
  // }
  // getProductos(): Observable<ProductoModelo[]> {
  //   return this.http.get<ProductoModelo[]>(`${this.apiUrl}/productos/all`);
  // }

  obtenerDetallesUsuario() {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No hay token en localStorage');
      return new Observable(observer => observer.error('No autenticado'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    const url = `/api/usuarios/detalles`;

    return this.http.get(url, { headers });
  }


}
