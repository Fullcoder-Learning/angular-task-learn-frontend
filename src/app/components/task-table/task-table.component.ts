import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task, TaskData } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  tasks: Array<TaskData> =  []

  taskId: string = "";
  taskName: string = "aaa";
  // creamos el resto de atributos para la carga del editor:
  taskCreated:Date = new Date();
  taskIsComplete: boolean = false;
  taskFinish:Date = new Date();
  // creamos un atributo que validará cuando estemos editando una tarea:
  isUpdateTask: boolean = false;
  

  task: Task = {
    name: "",
    description: ""
  }

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res:Array<TaskData>)=>{
      this.tasks = res;
    }, (err: object) => {
      console.log(err);
    });
  }

  getTask(id:string, name:string, description:string = ""): void {
    this.taskId = id;
    this.taskName = name;
  }

  // crear nueva función para actualizar form de edición:
  editTask(taskData:TaskData){
    // cargamos los datos que se mostrarán en la vista:
    this.taskId = taskData._id;
    this.task.name = taskData.name;
    this.task.description = taskData.description;
    this.taskCreated = taskData.date_created;
    this.taskIsComplete = taskData.is_complete;
    this.taskFinish = taskData.date_finish;
    // mostramos los campos para editar tarea:
    this.isUpdateTask = true;
  }

  // ponemos el event por defecto a null para poder reutilizar el método:
  updateTask($event: any = null){
    if($event && $event.delete == true){
      this.tasks = this.tasks.filter(task => task._id !== $event.id);
      console.log($event.id);
    }
    // actualizamos este apartado para controlar que estamos actualizando tarea o finalizandola:
    if(this.isUpdateTask == true){
      // cvreamos la operación de actualización:
      this.taskService.updateTask(this.task, this.taskId)
      .subscribe((res: any) => {
        this.tasks.map(task =>{
          if(task._id === this.taskId){
            task.name = res.task.name;
            task.description = res.task.description;
            this.isUpdateTask = false;
          }
        });
      },(err: object) =>{
        console.log(err);
      })
      
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

  // creamos un metodo para cancelar la edición:
  cancelUpdate(): void{
    // hay que vaciar los campos del form:
    this.task.name = "";
    this.task.description = "";
    this.isUpdateTask = false;
  }

  createTask(): void {
    this.taskService.postTask(this.task)
      .subscribe((res: any) => {
        console.log(res);
        this.tasks.push(res.task);
      }, (err: object) => {
        console.log(err);
      });
  }

}
