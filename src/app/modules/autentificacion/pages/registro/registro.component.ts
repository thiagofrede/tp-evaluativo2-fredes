import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
//importamos servicio de autentificaccion
import { AuthService } from '../services/auth.service';
//importamos componnetes de rutas de aangular
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


  export class RegistroComponent {
    //Este "hide" es para el input de contraseña
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
  
    //Referenciamos a nuestro servicio
    constructor(
      public servicioAuth: AuthService,
      public servicioRutas: Router
    ) { }
    //Funcion asincronica para el registro
    async registrar() {
        const credenciales= {
          email: this.usuarios.email,
          password: this.usuarios.password
        }
      
      
      //const "res"  = resguarda una respuesta
      const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
        //el metodo THEN nos devueve la respuesta esperada por a promesa
        .then(res => {
          alert("ha agregado un usuario con exito :D")
  
          //accedemos al servicio rutas -> metodo navigate
          //metodo NAVIGATE = permite dirigirnos a diferentes vistas
          this.servicioRutas.navigate(['/inicio'])
        })
  
        //el metodo CATCH toma una falla y la vuelve un Error
        .catch(error => {
          alert("hubo un problema al registrar un nuevo usuario :c")
        })
      //enviamos los nuevos registros por medio del metodo push a la coleccion
      //funcion para limpiar los inputs del formulario
      // this.coleccionUsuarios.push(credenciales);
  
      // alert("te registraste con exito");
      //llamamos a la funcion para vaciar los inputs del formulario
      this.limpiarinputs();
      //por consola
      // console.log(credenciales);
    }
  
    limpiarinputs() {
    
       
      const input = {
        uid: this.usuarios.uid = '',
        nombre: this.usuarios.nombre = '',
        apellido: this.usuarios.apellido = '',
        email: this.usuarios.email = '',
        password: this.usuarios.password = '',
        rol: this.usuarios.rol
      };
  /* 
      // Enviamos los nuevos registros por medio del método push a la colección
      this.coleccionUsuarios.push(credenciales);
  
      // Por consola
      console.log(credenciales);*/
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
  



