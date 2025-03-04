import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {RegistroUsuario} from '../modelos/usuario.modelo';
// import {ProductoModelo} from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = '/https://animemarketbackend.onrender.com';

  constructor(private http: HttpClient) {
  }
  getUsuarios(): Observable<any[]> {
    // Aquí se haría una petición HTTP a un servidor
    const usuarios = this.http.get<any[]>('/usuarios/all');
    return usuarios;
  }


}
