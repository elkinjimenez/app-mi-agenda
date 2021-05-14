import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contacto } from 'src/app/Interfaces/contacto';
import { ContactosService } from 'src/app/Services/contactos.service';
import { Tile } from '../inicio/inicio.component';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() contacto = {} as Contacto;

  constructor(
    private _contacto: ContactosService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  cambioEstado(contacto: Contacto) {
    contacto.estado = !contacto.estado;
    this._contacto.editarContacto(contacto).subscribe(
      data => {
        console.log('Actualizado: ', data);
        this._contacto.getContactos();
      }
    )
  }

  openDialog(contacto: Contacto) {
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      data: { id: contacto.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
