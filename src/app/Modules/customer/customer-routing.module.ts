import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './Components/customer-login/customer-login.component';
import { CustomerNavComponent } from './Components/customer-nav/customer-nav.component';
import { CustomerRegisterComponent } from './Components/customer-register/customer-register.component';
import { CustomerMotorsListingsComponent } from './Components/customer-motors-listings/customer-motors-listings.component';
import { CustomerSpareListingsComponent } from './Components/customer-spare-listings/customer-spare-listings.component';
import { CustomerPendingOrdersComponent } from './Components/customer-pending-orders/customer-pending-orders.component';
import { CustomerApprovedOrdersComponent } from './Components/customer-approved-orders/customer-approved-orders.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { CustomerHomeComponent } from './Components/customer-home/customer-home.component';

const routes: Routes = [
  { path: '', component: CustomerLoginComponent },
  {path: 'register', component:CustomerRegisterComponent},
  {path: 'nav', component:CustomerNavComponent, children:[
  {path: 'motors-list', component:CustomerMotorsListingsComponent},
  {path: 'spares-list', component: CustomerSpareListingsComponent},
  {path: 'pending-order', component:CustomerPendingOrdersComponent},
  {path: 'approved-order', component:CustomerApprovedOrdersComponent},
  {path: 'profile', component:CustomerProfileComponent},
  {path: 'customer-home', component:CustomerHomeComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
