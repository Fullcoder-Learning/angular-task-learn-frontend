import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-modal',
  templateUrl: './reset-modal.component.html',
  styleUrls: ['./reset-modal.component.css']
})
export class ResetModalComponent implements OnInit {
  // crear modelo de datos:
  restoreData: any = {
    email: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  // metodo para registrar usuario:
  restore(): void {
    console.log(this.restoreData);
  }

}
