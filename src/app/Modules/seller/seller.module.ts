import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SellerNavComponent } from './Components/seller-nav/seller-nav.component';
import { SellerLoginComponent } from './Components/seller-login/seller-login.component';
import { SellerRegisterComponent } from './Components/seller-register/seller-register.component';
import { SellerMotorVehiclesComponent } from './Components/seller-motor-vehicles/seller-motor-vehicles.component';
import { SellerSparepartComponent } from './Components/seller-sparepart/seller-sparepart.component';
import { SellerProfileComponent } from './Components/seller-profile/seller-profile.component';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';
import { SellerPendingOrderComponent } from './Components/seller-pending-order/seller-pending-order.component';
import { SellerAprovedOrderComponent } from './Components/seller-aproved-order/seller-aproved-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellerComponent,
    SellerNavComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    SellerMotorVehiclesComponent,
    SellerSparepartComponent,
    SellerProfileComponent,
    SellerHomeComponent,
    SellerPendingOrderComponent,
    SellerAprovedOrderComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }
