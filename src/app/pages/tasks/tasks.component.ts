import { Component, OnInit } from '@angular/core';
import { Task, TaskData } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Array<TaskData> =  []
  // vamos a optimizar los datos recogidos por tarea creando un objeto:
  taskForUpdate: TaskData = {
    _id: "",
    name: "",
    description: "",
    date_created: new Date(),
    is_complete: false,
    date_finish: new Date()
  }

  task: Task = {
    name: "",
    description: ""
  }

  taskId: string = "";
  taskName: string = "";

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res:Array<TaskData>)=>{
      this.tasks = res;
    }, (err: object) => {
      console.log(err);
    });
  }

  updateTask($event: any){
    console.log('hola 1');
    if($event.delete == true){
      this.tasks = this.tasks.filter(task => task._id !== $event.id);
      console.log($event.id);
      console.log('hola malo');
    }else{
      this.tasks.map(task =>{
        if(task._id === $event._id){
          task.name = $event.name;
          task.description = $event.description;
          task.is_complete = $event.is_complete;
          task.date_finish = $event.date_finish;
        }
      });
    }
  }

  getTask($event: any): void{
    this.taskId = $event.taskId;
    this.taskName = $event.taskName;
  }
}