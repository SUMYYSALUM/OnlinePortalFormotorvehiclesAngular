import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLoginComponent } from './Components/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './Components/customer-register/customer-register.component';
import { CustomerNavComponent } from './Components/customer-nav/customer-nav.component';
import { CustomerHomeComponent } from './Components/customer-home/customer-home.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { CustomerSpareListingsComponent } from './Components/customer-spare-listings/customer-spare-listings.component';
import { CustomerMotorsListingsComponent } from './Components/customer-motors-listings/customer-motors-listings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerMotorOrdersComponent } from './Components/customer-motor-orders/customer-motor-orders.component';
import { CustomerSpareOrdersComponent } from './Components/customer-spare-orders/customer-spare-orders.component';


@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerRegisterComponent,
    CustomerNavComponent,
    CustomerHomeComponent,
    CustomerProfileComponent,
    CustomerSpareListingsComponent,
    CustomerMotorsListingsComponent,
    CustomerMotorOrdersComponent,
    CustomerSpareOrdersComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
