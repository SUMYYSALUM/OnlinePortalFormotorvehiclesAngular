import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from './Components/customer-login/customer-login.component';
import { CustomerNavComponent } from './Components/customer-nav/customer-nav.component';
import { CustomerRegisterComponent } from './Components/customer-register/customer-register.component';
import { CustomerMotorsListingsComponent } from './Components/customer-motors-listings/customer-motors-listings.component';
import { CustomerSpareListingsComponent } from './Components/customer-spare-listings/customer-spare-listings.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { CustomerHomeComponent } from './Components/customer-home/customer-home.component';
import { AuthGuard } from './PathAuthorization/auth.guard';
import { CustomerMotorOrdersComponent } from './Components/customer-motor-orders/customer-motor-orders.component';
import { CustomerSpareOrdersComponent } from './Components/customer-spare-orders/customer-spare-orders.component';

const routes: Routes = [
  { path: '', component: CustomerLoginComponent },
  {path: 'register', component:CustomerRegisterComponent},
  {path: 'nav', component:CustomerNavComponent,canActivate:[AuthGuard], children:[
  {path: 'motors-list', component:CustomerMotorsListingsComponent},
  {path: 'spares-list', component: CustomerSpareListingsComponent},
  {path: 'motor-order', component:CustomerMotorOrdersComponent},
  {path: 'spare-order', component:CustomerSpareOrdersComponent},
  {path: 'profile', component:CustomerProfileComponent},
  {path: 'customer-home', component:CustomerHomeComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
