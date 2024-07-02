import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})export class AuthService {
  //Referenciar Auth de firebase para inicializarlo
    constructor(public auth: AngularFireAuth) { }
    //Funcion para tomar Uid
     
    // Fucion para Registro
  
    registrar(email: string, password:string){
      return this.auth.createUserWithEmailAndPassword(email, password);
    }
    
    //Funcion de Inicio de sesion
  
    iniciarSesion(email: string, password: string){
      return this.auth.signInWithEmailAndPassword(email, password)
    }
  
    //Funcion para Cerrar sesion
  
    cerrarSesion(){
      return this.auth.signOut();
    }
  }
  