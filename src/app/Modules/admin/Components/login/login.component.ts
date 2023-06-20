import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/Admin/admin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: any;
  adminId!:number;

  loginForm: FormGroup = new FormGroup({
    adminid: new FormControl(0),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),

  })


  constructor(private adminService:AdminService, private router:Router){}

  ngOnInit(){
  }

  login(){
    this.adminService.adminLogin(this.loginForm.value).subscribe(data=>{
      this.admin=data;
      sessionStorage.setItem("adminId", JSON.stringify(this.admin.adminId));
      this.router.navigate(['Admin/nav/home'])
      alert("Logged In Successfully")
    }, error=>{
      alert("Failed to login")
    })
  }

}
