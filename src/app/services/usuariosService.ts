import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) {
  }
  getUsuarios(): Observable<any[]> {
    // Aquí se haría una petición HTTP a un servidor
    const usuarios = this.http.get<any[]>('/api/usuarios/all');
    return usuarios;
  }
}
