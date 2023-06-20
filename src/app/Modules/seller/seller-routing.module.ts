import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './Components/seller-login/seller-login.component';
import { SellerNavComponent } from './Components/seller-nav/seller-nav.component';
import { SellerRegisterComponent } from './Components/seller-register/seller-register.component';
import { SellerMotorVehiclesComponent } from './Components/seller-motor-vehicles/seller-motor-vehicles.component';
import { SellerSparepartComponent } from './Components/seller-sparepart/seller-sparepart.component';
import { SellerProfileComponent } from './Components/seller-profile/seller-profile.component';
import { SellerPendingOrderComponent } from './Components/seller-pending-order/seller-pending-order.component';
import { SellerAprovedOrderComponent } from './Components/seller-aproved-order/seller-aproved-order.component';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';

const routes: Routes = [
  { path: '', component: SellerLoginComponent },
  {path: 'register', component:SellerRegisterComponent},
  {path:'nav', component:SellerNavComponent, children:[
    {path:'motorvehicle', component:SellerMotorVehiclesComponent},
    {path:'sparepart', component:SellerSparepartComponent},
    {path: 'seller-profile', component:SellerProfileComponent},
    {path: 'pending-order', component:SellerPendingOrderComponent},
    {path: 'approved-order', component:SellerAprovedOrderComponent},
    {path: 'seller-home', component:SellerHomeComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
