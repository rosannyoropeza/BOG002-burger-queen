import { menu, producto } from './../interfaz/menu';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.sass'],
})
export class MeseroComponent implements OnInit {
  menuURL = 'assets/menu.json';
  // data$!: Observable<any>;
  // menu1:Array<menu> = []
  menu1: Array<menu> = [];
  menu2: Array<menu> = [];

  constructor(private http: HttpClient) {}

  title?: String = 'Menu Mesero';

  ngOnInit(): void {
    // this.data$ = this.getMenu();
    this.getMenu();
    // this.menu1 = this.getDesayuno();
  }

  getMenu() {
    this.http.get(this.menuURL).subscribe((data) => {
      let desayunos: any = data;
      this.menu1 = desayunos.filter((item: menu) => item.tipo == 'desayuno');
      this.menu2 = desayunos.filter((item: menu) => item.tipo == 'almuerzo');
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

  // dataProductos:Array<menu> = [];
  // addDataProductos(item: menu){
  //   console.log("addDataProductos",item)
  //   // let pedido = {
  //   //   name: item.name,
  //   //   precio: item.precio,
  //   //   cant : 1,
  //   // }
  //   // item.cant = 0;
  //   this.dataProductos.push(item)
  // }

  dataProductos:Array<menu> = [];
  addDataProductos(item: menu){
    console.log("addDataProductos",item)
    this.dataProductos.push(item)
    // let producto : any = this.dataProductos;
    // producto.map((item:producto)=>{
    //   let pedido = {
    //     name: item.name,
    //     precio: item.precio,
    //     cant : 1,
    //   }
    //   item.cant = 0;
    // })

  }
}
