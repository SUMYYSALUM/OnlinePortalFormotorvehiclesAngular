import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginComponent } from './Components/seller-login/seller-login.component';
import { SellerNavComponent } from './Components/seller-nav/seller-nav.component';
import { SellerRegisterComponent } from './Components/seller-register/seller-register.component';
import { SellerMotorVehiclesComponent } from './Components/seller-motor-vehicles/seller-motor-vehicles.component';
import { SellerSparepartComponent } from './Components/seller-sparepart/seller-sparepart.component';
import { SellerProfileComponent } from './Components/seller-profile/seller-profile.component';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';
import { AuthGuard } from './PathAuthorization/auth.guard';
import { SellerMotorOrdersComponent } from './Components/seller-motor-orders/seller-motor-orders.component';
import { SellerSpareOrdersComponent } from './Components/seller-spare-orders/seller-spare-orders.component';

const routes: Routes = [
  { path: '', component: SellerLoginComponent },
  {path: 'register', component:SellerRegisterComponent},
  {path:'nav', component:SellerNavComponent, canActivate:[AuthGuard], children:[
    {path:'motorvehicle', component:SellerMotorVehiclesComponent},
    {path:'sparepart', component:SellerSparepartComponent},
    {path: 'seller-profile', component:SellerProfileComponent},
    {path: 'motor-order', component:SellerMotorOrdersComponent},
    {path: 'spare-order', component:SellerSpareOrdersComponent},
    {path: 'seller-home', component:SellerHomeComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
