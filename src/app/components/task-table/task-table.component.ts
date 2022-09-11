import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task, TaskData } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
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
  
  isUpdateTask: boolean = false;
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    
  }

  getTask(id:string, name:string): void {
    this.taskState.emit({taskId: id, taskName: name});
  }

  editTask(taskData:TaskData){
    this.taskForUpdate = taskData;
    this.isUpdateTask = true;
  }

  updateTask(){

    if(this.isUpdateTask == true){
      this.taskService.updateTask(this.taskForUpdate, this.taskForUpdate._id)
      .subscribe((res: any) => {
        this.tasks.map(task =>{
          if(task._id === this.taskForUpdate._id){
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
