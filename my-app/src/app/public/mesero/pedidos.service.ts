import { pedidoProducto, producto } from './../interfaz/menu';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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
  // total: number = 0;
  // totalPedido = new Subject<number>();
  // getTotal=this.totalPedido.asObservable();

  constructor() {}

  changeDetallePedido(item: producto) {
    this.cantidadProductos = this.detallePedido.length + 1;

    this.objDetallePedido = {
      id:this.cantidadProductos,
      idProducto: item.id,
      name: item.name,
      precio: item.precio,
      cant: 1,
      precioTotal:item.precio,
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
          producto.precioTotal = producto.precio * producto.cant;
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
    // si cantidad es mayor que 1 debe aumentar 1 cantidad por cada click y aumentar el precio
    itemDetalle.cant += 1;
    itemDetalle.precioTotal = itemDetalle.precio * itemDetalle.cant;
  }

  decreaseProducto(itemDetalle: pedidoProducto){
    //itemDetalle cuanta cantidad tiene
    // si cantidad es mayor que 1 debe disminuir 1 cantidad por cada click y disminuir el precio
    //si cantidad es igual a 1 debe eliminar el item.

    if(itemDetalle.cant > 1){
      itemDetalle.cant -= 1;
      itemDetalle.precioTotal -= itemDetalle.precio;
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

  totalPay(){
    let total = this.detallePedido.map(producto=> producto.precioTotal);
    let totalOrder = total.reduce((acc, val)=>{ return acc + val},0);
    return totalOrder;
  }

  cancelProducto(){
    this.detallePedido=[];
    this.getPedido.next(this.detallePedido);
  }
}
