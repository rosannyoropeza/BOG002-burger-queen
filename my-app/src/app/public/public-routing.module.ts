import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home.component';
import { MeseroComponent } from './mesero/mesero.component';
import { JefeDeCocinaComponent } from './jefe-de-cocina/jefe-de-cocina.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'mesero', component: MeseroComponent },
      { path: 'jefe-de-cocina', component: JefeDeCocinaComponent },
      {
        path: 'menu',
        component: MeseroComponent,
        children:[
          { path: 'desayunos', component: MenuComponent  },
        ]
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
