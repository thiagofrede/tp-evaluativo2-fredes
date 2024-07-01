import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes Globales
import { SharedModule } from './modules/shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { IniciosesionComponent } from './autentificacion/iniciosesion/iniciosesion.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    IniciosesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
