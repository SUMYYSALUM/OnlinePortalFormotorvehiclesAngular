import { Component } from '@angular/core';
import { CustomerService } from '../../Services/Customer/customer.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

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

}

