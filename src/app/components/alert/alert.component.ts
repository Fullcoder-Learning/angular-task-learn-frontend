// cargar el modulo Input para recibir parametros:
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  // cargar valores recibidos:
  @Input() alertSuccess: boolean = false;
  @Input() alertError: boolean = false;
  // crear mensaje de alerta:
  @Input() alertMessage: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

}
