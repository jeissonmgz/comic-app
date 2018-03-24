import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LienzoComponent } from './lienzo/lienzo.component';
import { VistaComponent } from './menu/vista/vista.component';
import { FiguraComponent } from './menu/figura/figura.component';
import { PropiedadesComponent } from './menu/propiedades/propiedades.component';
import { PrincipalComponent } from './menu/principal/principal.component';

import { PaginaService } from './services/vista/pagina.service';

@NgModule({
  declarations: [
    AppComponent,
    LienzoComponent,
    VistaComponent,
    FiguraComponent,
    PropiedadesComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PaginaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
