import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})export class AuthService {
  //Referenciar Auth de firebase para inicializarlo
    constructor(public auth: AngularFireAuth) { }
    //Funcion para tomar Uid
     async ObtenerUid(){
       //nos va a generar una promesa y la constante la va a capturar
      const user =await this.auth.currentUser

      //si el usuario no respeta la estructura de la interfaz/
      //si tuvo probllemas para el registro -> ej:mal internet
      if (user==null){
        return null
      }else{
        return user.uid
      }
     }
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
  