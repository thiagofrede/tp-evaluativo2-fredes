import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio de autentificaccion
import { AuthService } from '../services/auth.service';
//importamos componnetes de rutas de aangular
import { Route, Router } from '@angular/router';
import { throwError } from 'rxjs';

//importamos el firestoreservice
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
/*
  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ) { }

  async guardarUsuario() {
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
      .then(res => {
        console.log(this.usuarios);
      })
      .catch(err => {
        console.log("error =>" + err)
      })
  }
  /**
 
 
  const input = {
    uid: this.usuarios.uid = "",
    nombre: this.usuarios.nombre = "",
    apellido: this.usuarios.apellido = "",
    email: this.usuarios.email = "",
    password: this.usuarios.password = "",
    rol: this.usuarios.rol
  }
}













//Este "hide" es para el input de contraseña
hide = true;
// Importacion del Modelo / Interfaz
usuarios: Usuario = {
  uid: '',
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  rol: '',
}

//Crear una coleccion para usuarios
coleccionUsuarios: usuario[] = [];
//Funcion para el registro
registrar(){
  const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.nombre,
    apellido: this.usuarios.apellido,
    email: this.usuarios.email,
    password: this.usuarios.password,
    rol: this.usuarios.rol
  }
  //enviamos los nuevos registros por medio del metodo push a la coleccion
  this.coleccionUsuarios.push(credenciales);

  //por consola
  console.log(credenciales); */

    // Este "hide" es para el input de contraseña
    hide = true;
    
    // Importación del Modelo / Interfaz
    usuarios: Usuario = {
      uid: '',
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      rol: '',
    };
  
    // Crear una colección para usuarios
    coleccionUsuarios: Usuario[] = [];
  servicioFirestore: any;
  
    // Función para el registro
    registrar() {
      const credenciales = {
        uid: this.usuarios.uid,
        nombre: this.usuarios.nombre,
        apellido: this.usuarios.apellido,
        email: this.usuarios.email,
        password: this.usuarios.password,
        rol: this.usuarios.rol
      };
  
      // Enviamos los nuevos registros por medio del método push a la colección
      this.coleccionUsuarios.push(credenciales);
  
      // Por consola
      console.log(credenciales);
    }
  
    // Método asincrónico para guardar el usuario
    async guardarUsuario() {
      try {
        await this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid);
        console.log(this.usuarios);
      } catch (err) {
        console.log("error => " + err);
      }
    }
  }
  



