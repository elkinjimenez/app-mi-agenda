import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/Interfaces/contacto';
import { ContactosService } from 'src/app/Services/contactos.service';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  contacto = {} as Contacto;

  constructor(
    private _contacto: ContactosService,
    private _router: Router,
    private _routerAc: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this._routerAc.snapshot.params.id;
    if (id) {
      let con = this._contacto.contactos.find(c => c.id == id);
      console.log('Encontrado: ', con);
      this.contacto = con;
    }
  }

  agregarContacto() {
    if (this.contacto.id) {
      this._contacto.editarContacto(this.contacto).subscribe(
        data => {
          console.log('Agregado: ', data);
          this._contacto.getContactos();
          this._router.navigate(['/contactos']);
        }
      )
    } else {
      this._contacto.nuevoContacto(this.contacto).subscribe(
        data => {
          console.log('Agregado: ', data);
          this._contacto.getContactos();
          this._router.navigate(['/contactos']);
        }
      )
    }
  }

}
