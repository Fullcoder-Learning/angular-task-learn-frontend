import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router';
// importar el interace:
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginAlertError: boolean = false;
  loginMessageError: string = "Error al iniciar sesión. Usuario o contraseña incorrectos.";

  // Cargar interface en el tipo de dato:
  loginData: User = {
    email: "",
    password: ""
  }

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void{
  }

  login(): void {
    this.userService.loginUser(this.loginData)
      .subscribe((res: any)=>{
        console.log(res);
        if(res.token){
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        }else{
          this.loginAlertError = true;
          window.setTimeout(()=>{
            this.loginAlertError = false;
          }, 3000);
        }
      }, (err: object) => {
        console.log(err);
        this.loginAlertError =  true;
        window.setTimeout(()=>{
          this.loginAlertError = false;
        }, 3000);
      });
  }

}
