import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-pedido-producto',
  templateUrl: './card-pedido-producto.component.html',
  styleUrls: ['./card-pedido-producto.component.sass']
})
export class CardPedidoProductoComponent implements OnInit {
  @Input () ordenes:any;
  @Output () changeRequest=new EventEmitter();
  @Output () idRequest = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cardOrden=new FormGroup({
    checkbox:new FormControl(''),
  })

  actualizar(orden:any){
    this.changeRequest.emit(orden);
  }

}
