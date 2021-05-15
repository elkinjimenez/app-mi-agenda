import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './Agenda/contactos/contactos.component';
import { FormularioContactoComponent } from './Agenda/formulario-contacto/formulario-contacto.component';
import { InicioComponent } from './Agenda/inicio/inicio.component';
import { RegistroComponent } from './Usuarios/registro/registro.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'nuevo-contacto', component: FormularioContactoComponent},
  {path: 'editar-contacto/:id', component: FormularioContactoComponent},
  {path: 'registro-usuario', component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
