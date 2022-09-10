import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
// importar el interface UserData: 
import { User, ResetEmail, ResetPassword, UserData } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url_base: string = 'http://localhost:5000/api';

  // cargar token y añadirlo a la cabecera:
  token: any = localStorage.getItem('token');

  headers: any = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  });

  options: any = {headers: this.headers}

  constructor(private http: HttpClient) { }

  registerUser(user: User): any {
    return this.http.post(`${this.url_base}/register`, user)
            .pipe(map((data: object) => {
              return data;
            }));
  }

  loginUser(user: User): any {
    return this.http.post(`${this.url_base}/login`, user)
            .pipe(map((data: object) => {
              return data;
            }));
  }

  forgotUser(email: ResetEmail): any {
    return this.http.post(`${this.url_base}/forgot`, email)
            .pipe(map((data: object) => {
              return data;
            }));
  }

  resetPassword(password: ResetPassword, id: string, token: string): any {
    return this.http.put(`${this.url_base}/reset/${id}/${token}`, password)
            .pipe(map((data: object) => {
              return data;
            }));
  }

  getUser(): any {
    return this.http.get(`${this.url_base}/users`, this.options)
            .pipe(map((data: object) => {
              return data;
            }));
  }

  putUser(user:any, avatar:File, id: string): any {
    var formData = new FormData();

    this.headers = new HttpHeaders({
      'Accept': 'multipart/form-data',
      'Authorization': this.token,
    });
    
    this.options = {headers: this.headers}

    formData.append('avatar', avatar);
    formData.append('name', user.name);
    formData.append('lastname', user.lastname);
    if(user.email.length > 5){
      formData.append('email', user.email);
    }
    if(user.password.length > 0){
      formData.append('password', user.password);
    }


    return this.http.put(`${this.url_base}/users/${id}`, formData, this.options, )
            .pipe(map((data: object) => {
              return data;
            }));
  }
  // crear servicio para eliminar usuario:
  deleteUser(id:string): any {
    return this.http.delete(`${this.url_base}/users/${id}`, this.options, )
            .pipe(map((data: object) => {
              return data;
            }));
  }

}
