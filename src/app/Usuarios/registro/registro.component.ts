import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Interfaces/usuario';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario = {} as Usuario;

  constructor(
    private _usuario: UsuariosService,
  ) { }

  ngOnInit(): void {
  }

  agregar() {
    this.usuario.estado = true;
    this._usuario.nuevo(this.usuario).subscribe(
      data => {
        console.log('Agregado: ', data);
        // this._usuario.getContactos();
        alert('Great');
      }
    )
  }

}
