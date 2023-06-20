import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/Admin/admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  profile: any;
  constructor(private adminService:AdminService){

  }
  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.adminService.getAdminById(sessionStorage.getItem("adminId")).subscribe(data=>{
      this.profile=data;
    })
  }

}
