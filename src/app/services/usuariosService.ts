import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

}
