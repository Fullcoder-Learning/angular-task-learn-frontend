import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtAuthGuard } from '../jwt-auth.guard';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url_base: string = 'http://localhost:5000/api';

  token: any = localStorage.getItem('token');

  headers: any = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  });

  options: any = {headers: this.headers}

  constructor(private http: HttpClient, private jwtAuthGuard: JwtAuthGuard) { 
  }

  postTask(task: Task): any {
    return this.http.post(`${this.url_base}/tasks`, task, this.options)
      .pipe(map((data: object) => {
        return data;
      }));
  }

  getTasks(): any {
    return this.http.get(`${this.url_base}/tasks`, this.options)
      .pipe(map((data: object) => {
        return data;
      }));
  }

  finishTask(id:string): any {
    return this.http.patch(`${this.url_base}/tasks/${id}`, null, this.options)
      .pipe(map((data: object) => {
        return data;
      }));
  }

  deleteTask(id:string): any {
    return this.http.delete(`${this.url_base}/tasks/${id}`, this.options)
      .pipe(map((data: object) => {
        return data;
      }));
  }

  // crear servicio para actualizar tareas:
  updateTask(task:Task, id:string): any {
    return this.http.put(`${this.url_base}/tasks/${id}`, task, this.options)
      .pipe(map((data: object) => {
        return data;
      }));
  }
}
