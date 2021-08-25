import { FirebaseService } from 'src/app/firebase/firebase.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PedidoCliente } from '../../interfaz/menu';

@Component({
  selector: 'app-card-pedido-producto',
  templateUrl: './card-pedido-producto.component.html',
  styleUrls: ['./card-pedido-producto.component.sass']
})
export class CardPedidoProductoComponent implements OnInit {
  @Output () changeRequest=new EventEmitter();
  @Output () idRequest = new EventEmitter();
  ordenes: Array<any>;

  constructor(private firebaseService:FirebaseService) {

   }

  ngOnInit() {
    this.firebaseService.getOrdenes$().subscribe((arr:PedidoCliente[])=>{
      this.ordenes = this.firebaseService.ordenes
    })
    this.firebaseService.getOrdenes();
  }

  cardOrden=new FormGroup({
    checkbox:new FormControl(''),
  })

  actualizar(orden:any){
    this.changeRequest.emit(orden);
  }

}
