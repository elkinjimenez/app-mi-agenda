import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespAgenda } from '../Interfaces/resp-agenda';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  responseUsuario = {} as RespAgenda;

  constructor(
    private http: HttpClient,
  ) { }

  // getContactos() {
  //   this.http.get('/api/usuario').subscribe(
  //     data => {
  //       console.log('Usuario: ', data);
  //       this.responseUsuario = data as RespAgenda;
  //       if (this.responseUsuario.success) {
  //         // this.contactos = this.responseUsuario.data;
  //         // this.hayContactos = true;
  //       }
  //     }
  //   );
  // }

  nuevo(contacto: Usuario) {
    return this.http.post('/api/usuario', contacto);
  }

  editar(contacto: Usuario) {
    return this.http.put('/api/usuario/' + contacto.id, contacto);
  }

  eliminar(id: number) {
    return this.http.delete('/api/usuario/' + id);
  }
}
