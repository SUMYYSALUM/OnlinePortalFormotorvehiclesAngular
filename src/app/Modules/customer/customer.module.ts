import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLoginComponent } from './Components/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './Components/customer-register/customer-register.component';
import { CustomerNavComponent } from './Components/customer-nav/customer-nav.component';
import { CustomerHomeComponent } from './Components/customer-home/customer-home.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { CustomerPendingOrdersComponent } from './Components/customer-pending-orders/customer-pending-orders.component';
import { CustomerApprovedOrdersComponent } from './Components/customer-approved-orders/customer-approved-orders.component';
import { CustomerSpareListingsComponent } from './Components/customer-spare-listings/customer-spare-listings.component';
import { CustomerMotorsListingsComponent } from './Components/customer-motors-listings/customer-motors-listings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerRegisterComponent,
    CustomerNavComponent,
    CustomerHomeComponent,
    CustomerProfileComponent,
    CustomerPendingOrdersComponent,
    CustomerApprovedOrdersComponent,
    CustomerSpareListingsComponent,
    CustomerMotorsListingsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
