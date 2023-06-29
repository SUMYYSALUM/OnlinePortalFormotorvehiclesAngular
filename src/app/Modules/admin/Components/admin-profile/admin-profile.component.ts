import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/Admin/admin.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  profile: any;
  constructor(private adminService:AdminService,config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  
  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.adminService.getAdminById(sessionStorage.getItem("adminId")).subscribe(data=>{
      this.profile=data;
    })
  }

  openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}

}
