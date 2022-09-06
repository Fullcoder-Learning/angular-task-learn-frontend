// importamos Input:
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: ['./delete-task-modal.component.css']
})
export class DeleteTaskModalComponent implements OnInit {
  // cargar datos del padre:
  @Input() taskId: string = "";
  @Input() taskName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
