import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './Components/template/template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ContactosComponent } from './Components/contactos/contactos.component';
import { FormularioContactoComponent } from './Components/formulario-contacto/formulario-contacto.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalEliminarComponent } from './Components/modal-eliminar/modal-eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ContactosComponent,
    FormularioContactoComponent,
    ContactoComponent,
    InicioComponent,
    ModalEliminarComponent
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
