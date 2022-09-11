// importamos Output:
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
// importar el servicio task:
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: ['./delete-task-modal.component.css']
})
export class DeleteTaskModalComponent implements OnInit {
  @Input() taskId: string = "";
  @Input() taskName: string = "";
  // cargamos el emisor de output:
  @Output() task: EventEmitter<object> = new EventEmitter();

  // creamos el objeto del servicio task:
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  // creamos la función para eliminar tarea:
  deleteTask(): void {
    // hacemos la petición:
    this.taskService.deleteTask(this.taskId)
    .subscribe((res: any) =>{
      // emitimos la tarea finalizada:
      this.task.emit({id: this.taskId, delete:true});
    }, (err: object) => {
      console.log(err);
    })
  }

}
