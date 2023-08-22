import { Component } from '@angular/core';
import { CustomerService } from '../../Services/Customer/customer.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {

  profile: any;
  constructor(private customerService:CustomerService,config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  
  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.customerService.getCustomerById(sessionStorage.getItem("customerId")).subscribe(data=>{
      this.profile=data;
      console.log(this.profile);
    })
  }

  openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}

  updateForm:FormGroup=new FormGroup({
		firstname: new FormControl('', [Validators.required]),
		lastname: new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
    region:new FormControl('', [Validators.required]),
    district:new FormControl('', [Validators.required]),
    ward:new FormControl('', [Validators.required]),
		oldpassword:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		confirmpassword:new FormControl('', [Validators.required]),
	});

  dataToUpdate(data:any){
    this.updateForm = new FormGroup({
    firstname: new FormControl(data.firstname, [Validators.required]),
		lastname: new FormControl(data.lastname, [Validators.required]),
		phonenumber:new FormControl(data.phonenumber, [Validators.required]),
    region:new FormControl(data.region, [Validators.required]),
    district:new FormControl(data.district, [Validators.required]),
    ward:new FormControl(data.ward, [Validators.required]),
		oldpassword:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		confirmpassword:new FormControl('', [Validators.required]),

    })}


    updateCustomer(){
      this.customerService.updateCustomer(sessionStorage.getItem("customerId"),this.updateForm.value).subscribe(response=>{
        alert('Updated successfully');
        this.getProfile();
      }, error=>{
        alert('Failed to update');
      });
    }
  }




