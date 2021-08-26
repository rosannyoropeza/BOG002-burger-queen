import { PedidoProducto} from './../interfaz/menu';
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
  pedido: any = {};
  ordenes!: Array<any>;


  constructor(public firebaseService: FirebaseService) {

  }

  ngOnInit(): void {
    localStorage.setItem('perfil', 'cocinero');
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
