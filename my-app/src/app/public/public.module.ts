import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from './../core/shared/shared.module';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { MeseroComponent } from './mesero/mesero.component';
import { JefeDeCocinaComponent } from './jefe-de-cocina/jefe-de-cocina.component';

@NgModule ({
  //Para importar a este modulo
  imports:
  [
    PublicRoutingModule,
    SharedModule
  ],
  //Para declarar e importar los controladores que se usaran.
  declarations:
  [
    PublicComponent,
    HomeComponent,
    MeseroComponent,
    JefeDeCocinaComponent
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
