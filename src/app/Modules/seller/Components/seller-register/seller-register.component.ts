import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerService } from '../../Services/Seller/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmpassword');
  
    if (password?.value !== confirmPassword?.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  }
 

  constructor(private sellerService:SellerService, private router:Router){}

  registerForm: FormGroup = new FormGroup({
    sellerId: new FormControl(0),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    district: new FormControl('', [Validators.required]),
    ward: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });
  
  ngOnInit(){
    this.registerForm.setValidators(this.passwordMatchValidator);
  }

  
  


  registerSeller(){
    this.sellerService.addSeller(this.registerForm.value).subscribe(data=>{
      this.router.navigate(['Seller']);
      alert("Registered Successfully")
    }, error=>{
      alert("Failed to register seller")
    })
  }

}
