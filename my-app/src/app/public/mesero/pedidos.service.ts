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
  addPedido = this.getPedido.asObservable();

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

    if (this.detallePedido.length > 0) {
      let nombres: string[] = this.detallePedido.map( item => {
        return item.name;
      })

      let indice=nombres.includes(this.objDetallePedido.name);
      this.existe= indice;
      if (this.existe) {
        this.detallePedido.forEach((producto) => {
          if (item.id == producto.idProducto) {
            producto.cant = producto.cant + 1;
          }
        });
      }
      else{
        this.detallePedido.push(this.objDetallePedido);
      }
    } else {
      this.detallePedido.push(this.objDetallePedido);
      console.log('inicio');
    }
    this.getPedido.next(this.detallePedido);
    console.log(this.detallePedido);
  }

  addProducto(item: producto) {
    // if (item.id == item.idProducto) {
    //   item.cant = item.cant + 1;
    // }
  }

  deleteProducto(item: producto) {
    this.detallePedido.forEach((producto, index) => {
      if (item.id == producto.idProducto) {
        this.detallePedido.splice(index, 1);
      }
    });
  }
}
