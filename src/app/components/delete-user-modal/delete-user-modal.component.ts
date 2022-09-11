// cargar Input para recibir el id:
import { Component, OnInit, Input } from '@angular/core';
// importar el servicio:
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.css']
})
export class DeleteUserModalComponent implements OnInit {
  // crear atributo input para recibir id:
  @Input() id: string = "";

  // crear el objeto servicio:
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // crear metodo que eliminará el usuario:
  delete(): void {
    this.userService.deleteUser(this.id).subscribe((res: object)=>{
      // eliminar token cuando se borre usuario:
      localStorage.clear();
      // redirigir a la pantalla de login:
      window.location.href = "/";
    }, (err: object)=>{
      console.log(err);
    });
  }

}
