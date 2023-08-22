import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../Services/Customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  customer: any;
  customerId!:number;

  loginForm: FormGroup = new FormGroup({
    customerId: new FormControl(0),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),

  })


  constructor(private customerService:CustomerService, private router:Router){}

  ngOnInit(){
  }

  login(){
    this.customerService.customerLogin(this.loginForm.value).subscribe(data=>{
      this.customer=data;
      sessionStorage.setItem("customerId", JSON.stringify(this.customer.customerId));
      this.router.navigate(['Customer/nav/customer-home'])
    }, error=>{
      alert("Failed to login")
    })
  }

}

