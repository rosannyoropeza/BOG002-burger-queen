import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.module';

@NgModule({
//Para importar en el modulo
  imports:[
    HttpClientModule, 
    RouterModule
  ],
  //Para declararar e importar los controladores
  declarations: [
    NotFoundComponent
  ],
  //Para exportar y acceder desde cualquier parte de la aplicación
  exports:[
    HttpClientModule, 
    RouterModule, 
    NotFoundComponent
  ],
  providers:[]
})

export class SharedModule{
    constructor() {}
}