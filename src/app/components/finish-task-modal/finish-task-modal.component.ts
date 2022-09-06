// importamos Input:
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-task-modal',
  templateUrl: './finish-task-modal.component.html',
  styleUrls: ['./finish-task-modal.component.css']
})
export class FinishTaskModalComponent implements OnInit {
  // cargar datos del padre:
  @Input() taskId: string = "";
  @Input() taskName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
