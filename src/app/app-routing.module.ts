import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'Admin', loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'Seller', loadChildren: () => import('./Modules/seller/seller.module').then(m => m.SellerModule) },
  { path: 'Customer', loadChildren: () => import('./Modules/customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
