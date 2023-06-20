import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisterComponent } from './Components/register/register.component';
import { SellerTableComponent } from './Components/seller-table/seller-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerTableComponent } from './Components/customer-table/customer-table.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AllMotorvehiclesComponent } from './Components/all-motorvehicles/all-motorvehicles.component';
import { AllSparepartsComponent } from './Components/all-spareparts/all-spareparts.component';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    SellerTableComponent,
    CustomerTableComponent,
    AllMotorvehiclesComponent,
    AllSparepartsComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
