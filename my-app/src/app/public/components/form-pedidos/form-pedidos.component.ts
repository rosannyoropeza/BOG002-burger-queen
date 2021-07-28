import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {pedidoProducto} from '../../interfaz/menu'

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.sass']
})

export class FormPedidosComponent implements OnInit {
  @Input() dataPedido: Array<pedidoProducto> = [];
  @Output () addQuantityRequest= new EventEmitter();

  addProductQuantity(){
    this.addQuantityRequest.emit();
  }

  constructor() { }

  ngOnInit() {
  }


}
