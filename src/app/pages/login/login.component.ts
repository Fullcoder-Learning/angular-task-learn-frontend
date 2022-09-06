import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // crear modelo de login:
  loginData: any = {
    email: "",
    password: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  // metodo para hacer login:
  login(): void {
    console.log(this.loginData);
  }

}
