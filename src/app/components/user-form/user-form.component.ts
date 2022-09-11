import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserData } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userData: any = null;
  // crear un atributo id:
  id: string = "";

  avatar: string = "./assets/avatar.png";

  user: UserData = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    avatar: null
  }

  selectAvatar: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.userService.getUser().subscribe((res: any) => {
      console.log(res);
      this.userData = res.user;

      // cargar el id recuperado del servicio en el atributo id:
      this.id = this.userData._id;
      this.user.name = this.userData.name;
      this.user.lastname = this.userData.lastname;
      this.user.email = this.userData.email;
      // mostrar el nuevo avatar:
      if(this.userData.avatar){
        this.avatar = `http://localhost:5000/api/users/avatar/${this.userData.avatar}`;
      }

    }, (err:object) =>{
      console.log(err);
    });
  }
  
  updateUser(): void {
    console.log(this.user);
    
    // enviamos los datos del user, el avatar y el id:
    this.userService.putUser(this.user, this.selectAvatar, this.id)
    .subscribe((res: any) => {
      console.log(res);
      if(res.avatar){
        this.avatar = `http://localhost:5000/api/users/avatar/${res.avatar}`;
      }
    },(err: object)=>{
      console.log(err);
    });
  }
  // crear metodo para recuperar el avatar:
  getAvatar($event: any): void{
    this.selectAvatar = $event.target.files[0];
    
    console.log(this.selectAvatar);
  }

}
