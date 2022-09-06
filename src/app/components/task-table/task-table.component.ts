import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  dummyData: any = [
      {_id: "1", name: "Cocinar", description: "Cocinar galletas el sábado", date_created: "08/08/2022", is_complete: true, date_finish: "10/08/2022"},
      {_id: "2", name: "Preparar proyecto", description: "Preparar proyecto para presentar en Septiembre", date_created: "15/08/2022", is_complete: false},
      {_id: "3", name: "Estudiar Java", description: "Aprender Java para cubrir las especificaciones del proyecto", date_created: "19/08/2022", is_complete: false}
  ]

  taskId: string = "";
  taskName: string = "";

  // crear estructura del formulario:
  task: any = {
    name: null,
    description: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  getTask(id:string, name:string): void {
    this.taskId = id;
    this.taskName = name;
  }

  // metodo para crear tarea:
  createTask(): void {
    // agergar elemento al listado dummy:
    this.dummyData.push(
      {
        _id: "4", name: this.task.name, description: this.task.description,
        date_created: Date.now(), is_complete: false
      }
    )
  }

}
