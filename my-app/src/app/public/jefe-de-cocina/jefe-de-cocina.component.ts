import { Producto, PedidoProducto, PedidoCliente } from './../interfaz/menu';
import {
  Component,
  OnInit,
} from '@angular/core';
import { FirebaseService } from 'src/app/firebase/firebase.service';

@Component({
  selector: 'app-jefe-de-cocina',
  templateUrl: './jefe-de-cocina.component.html',
  styleUrls: ['./jefe-de-cocina.component.sass'],
})
export class JefeDeCocinaComponent implements OnInit {
  productos?: PedidoProducto[];
  ordenes?: any = [];
  pedido: any = {};

  constructor(public firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.firebaseService.setStatus();
    this.getOrdenes();
  }
  getOrdenes() {
    this.firebaseService.getOrdenes();
    this.ordenes=this.firebaseService.ordenes;
  }

  changeOrder(formCardPedido:any){
    let  pedidoEdit = {
      status: 2
    }
    this.firebaseService.updatePedido(formCardPedido.id, pedidoEdit).then((res)=>{
      console.log("El pedido fue actualizado")
    })
  }

}
