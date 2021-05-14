import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './Agenda/template/template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ContactosComponent } from './Agenda/contactos/contactos.component';
import { FormularioContactoComponent } from './Agenda/formulario-contacto/formulario-contacto.component';
import { ContactoComponent } from './Agenda/contacto/contacto.component';
import { InicioComponent } from './Agenda/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalEliminarComponent } from './Agenda/modal-eliminar/modal-eliminar.component';
import { RegistroComponent } from './Usuarios/registro/registro.component';
import { LogueoComponent } from './Usuarios/logueo/logueo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ContactosComponent,
    FormularioContactoComponent,
    ContactoComponent,
    InicioComponent,
    ModalEliminarComponent,
    RegistroComponent,
    LogueoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
