import {Injectable} from '@angular/core';
import * as http from 'node:http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
class TematicaService {
  constructor(private http: HttpClient) {
  }
  getTematicas(): object[] {
    // Aquí se haría una petición HTTP a un servidor
    const tematicas = this.http.get<object[]>('http://localhost:3000/tematicas');
  }
}
