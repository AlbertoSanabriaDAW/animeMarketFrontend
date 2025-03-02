import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalValoracionSubject = new BehaviorSubject<boolean>(false);
  modalValoracion$ = this.modalValoracionSubject.asObservable();

  abrirModalValoracion() {
    console.log('✅ Servicio: Abriendo modal de valoración');
    this.modalValoracionSubject.next(true);
  }

  cerrarModalValoracion() {
    console.log('🔴 Servicio: Cerrando modal de valoración');
    this.modalValoracionSubject.next(false);
  }
}
