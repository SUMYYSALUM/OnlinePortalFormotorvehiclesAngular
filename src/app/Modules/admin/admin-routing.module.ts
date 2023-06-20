import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SellerTableComponent } from './Components/seller-table/seller-table.component';
import { CustomerTableComponent } from './Components/customer-table/customer-table.component';
import { AllMotorvehiclesComponent } from './Components/all-motorvehicles/all-motorvehicles.component';
import { AllSparepartsComponent } from './Components/all-spareparts/all-spareparts.component';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'nav', component: NavbarComponent, children:[
      {path: 'home', component: HomeComponent},
      {path: 'seller-table', component: SellerTableComponent},
      {path: 'customer-table', component: CustomerTableComponent},
      {path: 'all-motorvehicle',component: AllMotorvehiclesComponent},
      {path: 'all-sparepart',component: AllSparepartsComponent},
      {path: 'admin-profile', component: AdminProfileComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
