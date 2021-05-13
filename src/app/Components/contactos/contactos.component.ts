import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/Services/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  constructor(
    public _contactos: ContactosService,
  ) { }

  ngOnInit(): void { }

}
