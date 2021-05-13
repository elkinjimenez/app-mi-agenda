import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contacto } from '../Interfaces/contacto';
import { RespAgenda } from '../Interfaces/resp-agenda';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  responseAgenda = {} as RespAgenda;

  hayContactos = false;

  contactos: Contacto[] = [];

  constructor(
    private http: HttpClient,
  ) {
    this.getContactos();
  }

  getContactos() {
    this.http.get('/api/agenda').subscribe(
      data => {
        console.log('Contactos: ', data);
        this.responseAgenda = data as RespAgenda;
        if (this.responseAgenda.success) {
          this.contactos = this.responseAgenda.data;
          this.hayContactos = true;
        }
      }
    );
  }

  nuevoContacto(contacto: Contacto) {
    return this.http.post('/api/agenda', contacto);
  }

  editarContacto(contacto: Contacto) {
    return this.http.put('/api/agenda/' + contacto.id, contacto);
  }

  eliminar(id: number) {
    return this.http.delete('/api/agenda/' + id);
  }
}
