import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../Services/Customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmpassword');
  
    if (password?.value !== confirmPassword?.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  }
 

  constructor(private customerService:CustomerService, private router:Router){}

  registerForm: FormGroup = new FormGroup({
    customerId: new FormControl(0),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
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

  
  


  registerCustomer(){
    this.customerService.addCustomer(this.registerForm.value).subscribe(data=>{
      this.router.navigate(['Customer']);
      alert("Registered Successfully")
    }, error=>{
      alert("Failed to register customer")
    })
  }

}