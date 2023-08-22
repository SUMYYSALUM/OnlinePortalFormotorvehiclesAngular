import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/Admin/admin.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  updateForm:FormGroup=new FormGroup({
		firstname: new FormControl('', [Validators.required]),
		lastname: new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
    address:new FormControl('', [Validators.required]),
		oldpassword:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		confirmpassword:new FormControl('', [Validators.required]),
	});

  dataToUpdate(data:any){
    this.updateForm = new FormGroup({
    firstname: new FormControl(data.firstname, [Validators.required]),
		lastname: new FormControl(data.lastname, [Validators.required]),
		phonenumber:new FormControl(data.phonenumber, [Validators.required]),
    address:new FormControl(data.address, [Validators.required]),
		oldpassword:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		confirmpassword:new FormControl('', [Validators.required]),

    })
  }



  updateAdmin(){
    this.adminService.updateAdmin(sessionStorage.getItem("adminId"),this.updateForm.value).subscribe(response=>{
      alert('Updated successfully');
      this.getProfile();
    }, error=>{
      alert('Failed to update');
    });
  }

}
