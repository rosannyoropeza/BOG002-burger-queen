import { pedidoProducto, producto } from './../interfaz/menu';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  detallePedido: Array<pedidoProducto> = [];
  cantidadProductos: number = 0;
  existe: boolean = false;
  objDetallePedido?: pedidoProducto;
  getPedido = new BehaviorSubject(this.detallePedido);
  //addPedido = this.getPedido.asObservable();

  constructor() {}

  changeDetallePedido(item: producto) {
    this.cantidadProductos = this.detallePedido.length + 1;

    this.objDetallePedido = {
      id:this.cantidadProductos,
      idProducto: item.id,
      name: item.name,
      precio: item.precio,
      cant: 1,
      adicional: {
        adicional1: '',
        adicional2: '',
        precio: 0,
      },
    };

    let existe:boolean=false;
    if (this.detallePedido.length > 0) {
      this.detallePedido.forEach((producto) => {
        if (item.id == producto.idProducto) {
          producto.cant = producto.cant + 1;
          producto.precio += item.precio;
          existe=true;
        }
      });
      if (!existe) {
        this.detallePedido.push(this.objDetallePedido);
      }
    } else {
      this.detallePedido.push(this.objDetallePedido);
    }
    this.getPedido.next(this.detallePedido);
  }

  increaseProducto(itemDetalle: pedidoProducto) {
    itemDetalle.cant += 1;
  }

  decreaseProducto(itemDetalle: pedidoProducto){
    //itemDetalle cuanta cantidad tiene
    // si cantidad es mayor que 1 debe disminuir 1 cantidad por cada click
    //si cantidad es igual a 1 debe eliminar el item.

    if(itemDetalle.cant > 1){
      itemDetalle.cant -= 1;
    }
    else{
      this.deleteProducto(itemDetalle);
    }
  }

  deleteProducto(itemDetalle: pedidoProducto) {
    this.detallePedido.map((detalleProducto, index) => {
      if (itemDetalle.id == detalleProducto.id) {
        this.detallePedido.splice(index, 1);
        this.getPedido.next(this.detallePedido);
      }
    });
  }

  cancelProducto(){
    this.detallePedido=[];
    this.getPedido.next(this.detallePedido);
  }
}
