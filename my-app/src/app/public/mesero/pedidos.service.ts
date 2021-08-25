import { PedidoProducto, Producto } from './../interfaz/menu';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  detallePedido: Array<PedidoProducto> = [];
  cantidadProductos: number = 0;
  existe: boolean = false;
  objDetallePedido?: PedidoProducto;
  getPedido = new BehaviorSubject(this.detallePedido);

  constructor() {}

  changeDetallePedido(item: Producto) {
    this.cantidadProductos = this.detallePedido.length + 1;

    this.objDetallePedido = {
      id: this.cantidadProductos,
      idProducto: item.id,
      name: item.name,
      precio: item.precio,
      cant: 1,
      precioTotal: item.precio,
      adicional: {
        adicional1: '',
        adicional2: '',
        precio: 0,
      },
    };

    if (this.detallePedido.length > 0) {
      let existe: boolean = false;
      this.detallePedido.forEach((producto) => {
        //SOLO DEBE ACTUALIZAR SI EL ITEM ID Y EL ITEM ADICIONAL SON IGUALES AL ID DEL PRODUCTO
        if (item.id == producto.idProducto && !item.adicional.adicional1 && !item.adicional.adicional2) {
          producto.cant = producto.cant + 1;
          producto.precioTotal = producto.precio * producto.cant;
          existe = true;
        }
      });
      if (!existe) {
        this.detallePedido.push(this.objDetallePedido);
      }
    } else {
      this.detallePedido.push(this.objDetallePedido);
    }

    // this.getPedido.next(this.detallePedido);
  }

  increaseProducto(itemDetalle: PedidoProducto) {
    // si cantidad es mayor que 1 debe aumentar 1 cantidad por cada click y aumentar el precio
    itemDetalle.cant += 1;
    itemDetalle.precioTotal = itemDetalle.precio * itemDetalle.cant;
  }

  decreaseProducto(itemDetalle: PedidoProducto) {
    //itemDetalle cuanta cantidad tiene
    // si cantidad es mayor que 1 debe disminuir 1 cantidad por cada click y disminuir el precio
    //si cantidad es igual a 1 debe eliminar el item.

    if (itemDetalle.cant > 1) {
      itemDetalle.cant -= 1;
      itemDetalle.precioTotal -= itemDetalle.precio;
    } else {
      this.deleteProducto(itemDetalle);
    }
  }

  deleteProducto(itemDetalle: PedidoProducto) {
    this.detallePedido.map((detalleProducto, index) => {
      if (itemDetalle.id == detalleProducto.id) {
        this.detallePedido.splice(index, 1);
        // this.getPedido.next(this.detallePedido);
      }
    });
  }

  totalPay() {
    let total = this.detallePedido.map((producto) => producto.precioTotal);
    let totalOrder = total.reduce((acc, val) => {
      return acc + val;
    }, 0);
    return totalOrder;
  }

  cancelProducto() {
    this.detallePedido = [];
    // this.getPedido.next(this.detallePedido);
  }

  addProductoAdicional(formAdicional: any) {
    //Si adicional 1 es true
    let adc1 = '';
    let adc2 = '';
    let precio = 0;

    if(formAdicional.adicional1){
      adc1 = "queso";
      precio++;
    }

    if(formAdicional.adicional2){
      adc2 = "huevo";
      precio++;
    }

    this.detallePedido.map(producto => {
      if(producto.id == this.objDetallePedido?.id) {
          producto.adicional.adicional1 = adc1;
          producto.adicional.adicional2 = adc2;
          producto.adicional.precio = precio;
          producto.name = producto.name  +" " + "con " + adc1 + " " + adc2;
          producto.precio = producto.precio + producto.adicional.precio;
          producto.precioTotal= producto.precio;
      }
    });
  }
}
