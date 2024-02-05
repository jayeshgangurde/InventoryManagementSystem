import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './inventory/addproduct/addproduct.component';

const routes: Routes = [
  {
    path:'inventory',loadChildren:()=>import('./inventory/inventory.module').then(m=>m.InventoryModule)  
  },
  {
    path:'edit/:stu',component:AddproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
