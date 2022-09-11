import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router"
import {Router} from '@angular/router';
// importar user service:
import { UserService } from 'src/app/services/user.service';
// importar la interface:
import { ResetPassword } from 'src/app/interfaces/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetData: ResetPassword = {
    newPassword: "",
    repitePassword: ""
  }

  id: string = "";
  token: string = "";

  // vamos a cambiar el alert de este componente por el alert externo:
  resetAlertSuccess: boolean = false;
  resetAlertError: boolean = false;
  resetAlertMessage: string = "";

  match: boolean = true;

  // construir objeto del user service:
  constructor(private _activeRouter: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) =>{
      this.id = params['id'];
      this.token = params['token'];
    });
  }

  reset(): void{
    if(this.resetData.newPassword !== this.resetData.repitePassword){
      this.match = false;
    }else{
      // subscribirse al servicio y enviar datos:
      this.userService.resetPassword(this.resetData, this.id, this.token)
      .subscribe((res: object) => {
        // devolver una respuesta por consola para hacer pruebas:
        console.log(res);
        // cambiar estado del alert:
        this.resetAlertSuccess = true;
        
        this.match = true;
        // cambiar mensaje de alerta:
        this.resetAlertMessage = "La contraseña ha sido reestablecida con éxito. Ya puedes iniciar sesión";
        // establecer un temporizador para quitar mensaje alerta:
        window.setTimeout(()=>{
          this.resetAlertSuccess = false;
          this.router.navigate(['login']);
        }, 3000);
      }, (err: object) => {
        console.log(err);
        this.resetAlertError =  true;
        this.resetAlertMessage = "Error, el email no existe.";
        window.setTimeout(()=>{
          this.resetAlertError = false;
        }, 3000);
      });
      this.match = true;
    }
  }

}
