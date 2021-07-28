import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from './../core/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from "@angular/common";
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { MeseroComponent } from './mesero/mesero.component';
import { JefeDeCocinaComponent } from './jefe-de-cocina/jefe-de-cocina.component';
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { FormPedidosComponent } from './components/form-pedidos/form-pedidos.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule ({
  //Para importar a este modulo
  imports:
  [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations:
  [
    PublicComponent,
    HomeComponent,
    MeseroComponent,
    JefeDeCocinaComponent,
    HeaderComponent,
    MenuComponent,
    FormPedidosComponent,
    ModalComponent
  ],
  //Para exportar y acceder desde HTML APP
  exports:
  [
    PublicComponent,
    HomeComponent
  ],
  providers:[]
})

export class PublicModule{
  constructor (){}
}
