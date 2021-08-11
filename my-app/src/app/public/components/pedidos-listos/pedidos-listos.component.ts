import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidos-listos',
  templateUrl: './pedidos-listos.component.html',
  styleUrls: ['./pedidos-listos.component.sass']
})
export class PedidosListosComponent implements OnInit {
  @Input () ordenes:any;

  constructor() { }

  ngOnInit() {
  }

}
