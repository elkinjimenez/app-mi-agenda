import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contacto } from 'src/app/Interfaces/contacto';
import { ContactosService } from 'src/app/Services/contactos.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Contacto,
    private _contacto: ContactosService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void { }

  eliminar(id: number) {
    this._contacto.eliminar(id).subscribe(
      data => {
        console.log('Eliminado: ', data);
        this.no();
        this._contacto.getContactos();
      }
    )
  }

  no() {
    this.dialog.closeAll();
  }

}
