import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { producto, pedidoProducto } from './../interfaz/menu';
@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.sass'],
})
export class MeseroComponent implements OnInit {
  menuURL = 'assets/menu.json';
  menu1: Array<producto> = [];
  menu2: Array<producto> = [];

  constructor(private http: HttpClient, private el: ElementRef) {}

  title?: String = 'Menu Mesero';

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    this.http.get(this.menuURL).subscribe((data) => {
      let desayunos: any = data;
      this.menu1 = desayunos.filter((item: producto) => item.tipo == 'desayuno');
      this.menu2 = desayunos.filter((item: producto) => item.tipo == 'almuerzo');
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
  dataProductos: Array<pedidoProducto> = [];
  cantidadProductos: number = 0;
  objPedidoProducto?: pedidoProducto;
  itemSeleccionado: any = {};

  addDataProductos(item: producto) {
    this.cantidadProductos = this.dataProductos.length + 1;

    this.objPedidoProducto = {
      id: this.cantidadProductos,
      idProducto: item.id,
      name: item.name,
      precio: item.precio,
      cant: 1,
      adicional: {
        adicional1: "",
        adicional2: "",
        precio: 0,
      },
    }

   let existe = false;

    // Para ingresar el producto en el formulario de pedidos
    if(this.dataProductos.length > 0){
      this.dataProductos.forEach((producto)=>{
        if(item.id == producto.idProducto){
          producto.cant = producto.cant + 1;
          existe = true
        }
      })
      if (!existe){
        this.dataProductos.push(this.objPedidoProducto);
      }
    }
    else{
      this.dataProductos.push(this.objPedidoProducto);
    }

    this.itemSeleccionado = item;
    this.showModal()
  }

  // Para aumentar cantidad de producto selecionados en el formulario de pedidos
  addProduct(){
    // if(item.id == producto.idProducto){
    //   producto.cant = producto.cant + 1;
  }

  // Para disminuir cantidad de producto selecionados en el formulario de pedidos

  // Para eliminar los producto selecionados en el formulario de pedidos

  //Mostrar Modal de Adicionales para Hamburguesas
  show: boolean = false;

  showModal(){
   if (this.itemSeleccionado.adicional.adicional1== null && this.itemSeleccionado.adicional.adicional2== null){
     this.show = false;
   }
   else{
     this.show = !this.show;
   }
  }

  closeModal() {
     this.show = false;
  }

  addAdicional(item:producto){
    console.log(item)
    // this.dataProductos.map( prod => {
    //   if (prod.id==1 && prod.idProducto== item.id){
    //     prod.name = prod.name
    //     prod.adicional.adicional1 = prod.adicional.adicional1
    //     prod.adicional.adicional2 = prod.adicional.adicional2
    //     prod.adicional.precio = prod.adicional.precio
    //     prod.precio = prod.adicional.precio + prod.adicional.precio
    //     // prod.name = prod.name + 'con queso'
    //     // prod.adicional.adicional1 = 'queso'
    //     // prod.adicional.adicional2 = 'huevo'
    //     // prod.adicional.precio = prod.adicional.precio + 2
    //   }
    // });

    // // let idProduct = item;
    // console.log(idProduct, "Soy id del producto menu")
  }


}



