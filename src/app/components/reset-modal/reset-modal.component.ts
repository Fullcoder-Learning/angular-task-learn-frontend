import { Component, OnInit } from '@angular/core';
// importar el user service:
import { UserService } from 'src/app/services/user.service';
// importar el interface email:
import { ResetEmail } from 'src/app/interfaces/user';

@Component({
  selector: 'app-reset-modal',
  templateUrl: './reset-modal.component.html',
  styleUrls: ['./reset-modal.component.css']
})
export class ResetModalComponent implements OnInit {
  // crear atributos para alertas:
  restoreAlertSuccess = false;
  restoreAlertError = false;
  restoreAlertMessage = "";

  // cargar el tipo de dato Email:
  restoreData: ResetEmail = {
    email: ""
  }

  // crear objeto de user service:
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // metodo para registrar usuario:
  restore(): void {
    // subscribirse al servicio y enviar datos:
    this.userService.forgotUser(this.restoreData)
      .subscribe((res: object) => {
        // devolver una respuesta por consola para hacer pruebas:
        console.log(res);
        // cambiar estado del alert:
        this.restoreAlertSuccess = true;
        // cambiar mensaje de alerta:
        this.restoreAlertMessage = "Se ha enviado un correo con un enlace para reestablecer contraseña. Revisa tu bandeja por favor.";
        // establecer un temporizador para quitar mensaje alerta:
        window.setTimeout(()=>{
          this.restoreAlertSuccess = false;
        }, 3000);
      }, (err: object) => {
        console.log(err);
        this.restoreAlertError =  true;
        this.restoreAlertMessage = "Error, el email no existe.";
        window.setTimeout(()=>{
          this.restoreAlertError = false;
        }, 3000);
      });
  }

}
