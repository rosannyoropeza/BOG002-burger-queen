import { Component, Input, OnInit } from '@angular/core';
import {menu} from '../../interfaz/menu'

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.sass']
})

export class FormPedidosComponent implements OnInit {
  @Input() dataPedido: Array<menu> = [];

  constructor() { }

  ngOnInit() {
  }


}
