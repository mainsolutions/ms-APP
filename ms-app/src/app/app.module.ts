import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MzButtonModule,
  MzInputModule,
  MzNavbarModule,
  MzDropdownModule,
  MzSidenavModule,
  MzIconModule,
  MzIconMdiModule,
  MzTextareaModule  } from 'ngx-materialize';
import { BodyPageComponent } from './body-page/body-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavbarComponent,
    BodyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzNavbarModule,
    MzDropdownModule,
    MzSidenavModule,
    MzIconModule,
    MzIconMdiModule,
    MzTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
