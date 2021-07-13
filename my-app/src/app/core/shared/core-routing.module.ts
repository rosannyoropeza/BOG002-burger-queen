import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "../core.module";

const routes : Routes = [{
    path: '', component: CoreModule
}]; 

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class CoreRoutingModule {}