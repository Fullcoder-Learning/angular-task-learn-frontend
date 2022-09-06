import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // cargar avatar:
  avatar: string = "./assets/avatar.png";

  // crear modelo para editar usuario:
  user: any = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    file: ""
  }

  constructor() { 
    // crear usuario dummy:
    this.user = {name: "Guillermo", lastname: "Granados Gómez", email: "pytonicus@gmail.com"}
  }

  ngOnInit(): void {
  }

  // recuperar usuario:
  getUser(): any {
    return this.user;
  }

  // editar usuario:
  updateUser(): any {
    console.log(this.user); 
  }

}
