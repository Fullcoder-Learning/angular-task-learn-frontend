import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskData } from 'src/app/interfaces/task';

@Component({
  selector: 'app-finish-task-modal',
  templateUrl: './finish-task-modal.component.html',
  styleUrls: ['./finish-task-modal.component.css']
})
export class FinishTaskModalComponent implements OnInit {
  @Input() taskId: string = "";
  @Input() taskName: string = "";
  // creamos un nuevo emisor:
  @Output() task: EventEmitter<TaskData> = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  finishTask(): void {
    this.taskService.finishTask(this.taskId)
    .subscribe((res: any) =>{
      this.task.emit(res.task);
    }, (err: object) => {
      console.log(err);
    })
  }

}
