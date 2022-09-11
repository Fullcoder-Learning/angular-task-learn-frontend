import { Component, OnInit } from '@angular/core';
// importar el servicio:
import { UserService } from 'src/app/services/user.service';
// importamos el interface:
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  // crear atributos para controlar alertas:
  registerAlertSuccess: boolean = false;
  registerAlertError: boolean = false;
  alertMessage: string = "";

  // se le pasa el tipo de dato interface:
  registerData: User = {
    email: "",
    password: ""
  }

  // crear objeto del servicio:
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // modificar el metodo register para enviar datos via post:
  register(): void {
    // subscribirse al servicio y enviar datos:
    this.userService.registerUser(this.registerData)
      .subscribe((res: User) => {
        // devolver una respuesta por consola para hacer pruebas:
        console.log(res);
        // cambiar estado del alert:
        this.registerAlertSuccess = true;
        // cambiar mensaje de alerta:
        this.alertMessage = "Usuario registrado con éxito, ya puedes iniciar sesión.";
        // establecer un temporizador para quitar mensaje alerta:
        window.setTimeout(()=>{
          this.registerAlertSuccess = false;
        }, 3000);
      }, (err: object) => {
        console.log(err);
        this.registerAlertError =  true;
        this.alertMessage = "Error al crear usuario, el usuario ya existe.";
        window.setTimeout(()=>{
          this.registerAlertError = false;
        }, 3000);
      });
  }

}
