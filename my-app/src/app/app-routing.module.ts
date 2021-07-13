import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/containers/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PublicModule } from './public/public.module';

import { NotFoundComponent } from './core/shared/components/not-found/not-found.module';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full'},
  //{ path: 'home', component:  HomeComponent},
  {
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },

  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
