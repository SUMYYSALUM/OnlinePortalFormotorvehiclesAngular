import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerServicesService } from 'src/app/Modules/admin/Services/Seller/seller-services.service';
import { SellerService } from '../../Services/Seller/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {

  seller: any;
  sellerId!:number;

  loginForm: FormGroup = new FormGroup({
    sellerId: new FormControl(0),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),

  })


  constructor(private sellerService: SellerService, private router:Router){}

  ngOnInit(){
  }

  login(){
    this.sellerService.sellerLogin(this.loginForm.value).subscribe(data=>{
      this.seller=data;
      sessionStorage.setItem("sellerId", JSON.stringify(this.seller.sellerId));
      this.router.navigate(['Seller/nav/seller-home'])
      alert("Logged In Successfully")
    }, error=>{
      alert("Failed to login")
    })
  }

}

