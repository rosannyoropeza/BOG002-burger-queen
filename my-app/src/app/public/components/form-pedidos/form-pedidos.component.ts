import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {pedidoProducto, producto} from '../../interfaz/menu'

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.sass']
})

export class FormPedidosComponent implements OnInit {
  @Input() dataPedido: Array<pedidoProducto> = [];
  @Output () addQuantityRequest= new EventEmitter();
  @Output () deleteRequest = new EventEmitter();
  @Output () reduceRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addProductQuantity(item:pedidoProducto){
    this.addQuantityRequest.emit(item);
  }

  deleteProductQuantity(item:pedidoProducto){
    this.deleteRequest.emit(item);
  }

  reduceProductQuantity(item:pedidoProducto){
    this.reduceRequest.emit(item);
  }
}
