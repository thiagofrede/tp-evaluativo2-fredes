import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';


const routes: Routes = [
  {
    path:"", component: InicioComponent
  }, 
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  /*{//crear carpeta de productos
    path:"",loadChildren:()=>import('./menu').then(m=>m.ProductosModule)
  }, */
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion-routing.module').then(m=>m.AutentificacionRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
