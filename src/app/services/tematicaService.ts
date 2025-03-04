import {Injectable} from '@angular/core';
import * as http from 'node:http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TematicaService {
  constructor(private http: HttpClient) {
  }

  getTematicas(): Observable<any[]> {
    // Aquí se haría una petición HTTP a un servidor
    const tematicas = this.http.get<any[]>('/tematicas/all');
    return tematicas;
  }
}
