import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {
  // crear modelo de datos:
  registerData: any = {
    email: "",
    password: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  // metodo para registrar usuario:
  register(): void {
    console.log(this.registerData);
  }

}
