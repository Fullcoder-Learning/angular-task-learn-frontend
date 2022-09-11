import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task, TaskData } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-list-mobile',
  templateUrl: './task-list-mobile.component.html',
  styleUrls: ['./task-list-mobile.component.css']
})
export class TaskListMobileComponent implements OnInit {
  @Input() tasks: Array<TaskData> = []

  @Input() taskForUpdate: TaskData = {
    _id: "",
    name: "",
    description: "",
    date_created: new Date(),
    is_complete: false,
    date_finish: new Date()
  }

  @Input() task: Task = {
    name: "",
    description: ""
  }

  @Output() taskState: EventEmitter<any> = new EventEmitter();

  taskId: string = "";
  taskName: string = "";
  
  isUpdateTask: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  getTask(): void {
    this.taskState.emit({taskId: this.taskForUpdate._id, taskName: this.taskForUpdate.name});
  }

  // Editamos la función que recoge los datos de la tarea a actualizar creando una nueva:
  selectTask(taskData:TaskData){
    this.taskForUpdate = taskData;
  }

  editTask(){
    this.isUpdateTask = true;
  }

  updateTask(){
    if(this.isUpdateTask == true){
      this.task.name = this.taskForUpdate.name;
      this.task.description = this.taskForUpdate.description;
      this.taskId = this.taskForUpdate._id;
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
    }

    
  }

  cancelUpdate(): void{
    this.taskForUpdate.name = "";
    this.taskForUpdate.description = "";
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
