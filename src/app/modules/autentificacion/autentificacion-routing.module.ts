import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../autentificacion/pages/registro/registro.component';
import{IniciosesionComponent} from '../autentificacion/pages/iniciosesion/iniciosesion.component'

const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"inicio-sesion",component:IniciosesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
