import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pedidoProducto } from '../../interfaz/menu'

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.sass']
})

export class FormPedidosComponent implements OnInit {
  @Input() dataPedido: Array<pedidoProducto> = [];
  @Output () increaseRequest= new EventEmitter();
  @Output () deleteRequest = new EventEmitter();
  @Output () decreaseRequest = new EventEmitter();
  @Output () cancelRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increaseProductQuantity(item:pedidoProducto){
    this.increaseRequest.emit(item);
  }

  deleteProductQuantity(item:pedidoProducto){
    this.deleteRequest.emit(item);
  }

  decreaseProductQuantity(item:pedidoProducto){
    this.decreaseRequest.emit(item);
  }

  cancelOrder(){
    this.cancelRequest.emit();
  }
}
