import { Component, OnInit } from '@angular/core';
// importamos el servicio:
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // creamos una variable para el avatar: 
  avatar: string = "./assets/avatar.png";

  // creamos el objeto del servicio:
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // implementamos el servicio para recuperar la imagen:
    this.userService.getUser().subscribe((res: any) =>{
      
      // si tenemos un avatar lo cargamos:
      if(res.user.avatar && res.user.avatar != null){
        this.avatar = `http://localhost:5000/api/users/avatar/${res.user.avatar}`;
        console.log(this.avatar);
      }
    }, (err: object)=>{
      console.log(err);
    });
  }

}
