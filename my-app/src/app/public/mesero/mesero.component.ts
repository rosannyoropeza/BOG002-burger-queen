import { map } from 'rxjs/operators';
import { FirebaseService } from './../../firebase/firebase.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierModuleUrl, NgModuleResolver } from '@angular/compiler';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Producto, PedidoProducto, PedidoCliente } from './../interfaz/menu';
import { PedidosService } from './pedidos.service';
//import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.sass'],
})
export class MeseroComponent implements OnInit {
  menuURL = 'assets/menu.json';
  menu1: Array<Producto> = [];
  menu2: Array<Producto> = [];
  ordenes?: any = [];
  lastOrden: any = 0;

  constructor(
    private http: HttpClient,
    private el: ElementRef,
    private pedidosService: PedidosService,
    public firebaseService: FirebaseService
  ) {}

  title?: String = 'Menu Mesero';

  ngOnInit(): void {
    this.getMenu();
    this.firebaseService.setStatus();
    this.firebaseService.getOrdenes$().subscribe((ordenes:PedidoCliente[])=>{
      ordenes.map((ord:PedidoCliente)=>{
        this.lastOrden = ord.idOrden;
      })
    })
  }

  getMenu() {
    this.http.get(this.menuURL).subscribe((data: any) => {
      let desayunos: any = data;
      this.menu1 = desayunos.filter(
        (item: Producto) => item.tipo == 'desayuno'
      );
      this.menu2 = desayunos.filter(
        (item: Producto) => item.tipo == 'almuerzo'
      );
    });
  }

  selectedMenu1?: boolean = true;
  showMenu1(): void {
    this.selectedMenu1 = true;
    this.selectedMenu2 = false;
  }

  selectedMenu2?: boolean = false;
  showMenu2(): void {
    this.selectedMenu1 = false;
    this.selectedMenu2 = true;
  }

  // //Creando Lista de productos
  dataProductos: Array<PedidoProducto> = [];
  cantidadProductos: number = 0;
  objPedidoProducto?: PedidoProducto;
  itemSeleccionado: any = {};

  addDataProductos(item: Producto) {
    this.pedidosService.changeDetallePedido(item);
    this.dataProductos = this.pedidosService.detallePedido;
    this.itemSeleccionado = item;
    this.showModal();
  }

  // Para aumentar cantidad de producto selecionados en el formulario de pedidos
  increaseProduct(itemPedido: PedidoProducto) {
    this.pedidosService.increaseProducto(itemPedido);
  }

  // Para disminuir cantidad de producto selecionados en el formulario de pedidos
  decreaseProduct(itemPedido: PedidoProducto) {
    this.pedidosService.decreaseProducto(itemPedido);
  }

  // Para eliminar los producto selecionados en el formulario de pedidos
  deleteProduct(itemPedido: PedidoProducto) {
    this.pedidosService.deleteProducto(itemPedido);
  }

  // Para sumar el total de los productos de detallePedido
  totalProduct() {
    let total = this.pedidosService.totalPay();
    return total;
  }

  cancelProduct() {
    this.pedidosService.cancelProducto();
    this.dataProductos = this.pedidosService.detallePedido;
  }

  //Mostrar Modal de Adicionales para Hamburguesas
  show: boolean = false;

  showModal() {
    if (
      this.itemSeleccionado.adicional.adicional1 == null &&
      this.itemSeleccionado.adicional.adicional2 == null
    ) {
      this.show = false;
    } else {
      this.show = !this.show;
    }
  }

  closeModal() {
    this.show = false;
  }

  addAdicional(formAdicional: any) {
    this.pedidosService.addProductoAdicional(formAdicional);
    this.dataProductos = this.pedidosService.detallePedido;
  }

  getCliente: any;
  //FUNCION PARA CREAR PEDIDO EN FIREBASE
  createOrder(formCliente: any) {
    formCliente.idOrden = this.lastOrden + 1;
    formCliente.status = 1;
    this.firebaseService
      .createClientePedido(formCliente)
      .then((resp) => {
        this.createDetalle(resp.id);
      })
      .catch((error) => {

      });
  }

  //FUNCION CALLBACK PARA CREAR PEDIDO DEL CLIENTE
  createDetalle(id: any) {
    console.log('1');
    console.log('1', this.dataProductos);
    this.firebaseService.createDetallePedido(this.dataProductos, id);
  }
}
