import { Component, OnInit } from '@angular/core';
// importar elementos del router para recuperar parametros:
import {ActivatedRoute,Params} from "@angular/router"
// importar el router para redirigir:
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  // crear modelo de datos:
  resetData: any = {
    newPassword: "",
    repitePassword: ""
  }

  // crear atributos para recibir parametros:
  id: string = "";
  token: string = "";

  // crear un boolean para comprobar la alerta y otro para la contraseña:
  alert: boolean = false;
  match: boolean = true;

  // crear objeto para recibir parametros y el router:
  constructor(private _activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // recuperar parametros recibidos por la url:
    this._activeRouter.params.subscribe((params: Params) =>{
      this.id = params['id'];
      this.token = params['token'];
    });
  }

  reset(): void{
    if(this.resetData.newPassword !== this.resetData.repitePassword){
      this.match = false;
    }else{
      console.log(this.resetData);
      this.match = true;
      this.alert = true;
      window.setTimeout(()=>{
          // si todo va bien redirigir a login:
          this.router.navigate(['login']);
      }, 3000);
    }
  }

}
