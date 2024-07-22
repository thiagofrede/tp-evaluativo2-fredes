
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

//VISTAS - PAGINAS
import { InicioComponent } from './pages/inicio/inicio.component';
//COMPONENTE LOCAL
import{CardsComponent} from './components/cards/cards.component'

// COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
    
  ]
})
export class InicioModule { }
