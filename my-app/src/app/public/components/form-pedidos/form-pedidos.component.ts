import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, MaxValidator } from '@angular/forms';
import { PedidoProducto } from '../../interfaz/menu'

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.sass']
})

export class FormPedidosComponent implements OnInit {
  @Input() dataPedido: Array<PedidoProducto> = [];
  @Output () increaseRequest= new EventEmitter();
  @Output () deleteRequest = new EventEmitter();
  @Output () decreaseRequest = new EventEmitter();
  @Output () cancelRequest = new EventEmitter();
  @Output () postRequest = new EventEmitter();
  @Input  () payProduct: any;

  constructor() { }

  ngOnInit() {
  }

  pedidoCliente = new FormGroup({
    cliente : new FormControl(''),
    mesa : new FormControl('')
  })

  onSubmit(){
    this.postRequest.emit(this.pedidoCliente.value)
    this.pedidoCliente.reset();
    this.dataPedido=[];
  }

  increaseProductQuantity(item:PedidoProducto){
    this.increaseRequest.emit(item);
  }

  deleteProductQuantity(item:PedidoProducto){
    this.deleteRequest.emit(item);
  }

  decreaseProductQuantity(item:PedidoProducto){
    this.decreaseRequest.emit(item);
  }

  cancelOrder(){
    this.cancelRequest.emit();
    this.pedidoCliente.reset();
  }
}
