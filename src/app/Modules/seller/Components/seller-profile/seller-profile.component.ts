import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SellerService } from '../../Services/Seller/seller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent {

  profile: any;
  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private sellerService:SellerService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  
  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.sellerService.getSellerById(sessionStorage.getItem("sellerId")).subscribe(data=>{
      this.profile=data;
      console.log(this.profile);
    });
  }

  openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}

  updateForm:FormGroup=new FormGroup({
		firstName: new FormControl('', [Validators.required]),
		lastName: new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
    region:new FormControl('', [Validators.required]),
    district:new FormControl('', [Validators.required]),
    ward:new FormControl('', [Validators.required]),
		oldPassword:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		confirmpassword:new FormControl('', [Validators.required]),
	});


  dataToUpdate(data:any){
    this.updateForm = new FormGroup({
    firstName: new FormControl(data.firstName, [Validators.required]),
		lastName: new FormControl(data.lastName, [Validators.required]),
		phonenumber:new FormControl(data.phonenumber, [Validators.required]),
    region:new FormControl(data.region, [Validators.required]),
    district:new FormControl(data.district, [Validators.required]),
    ward:new FormControl(data.ward, [Validators.required]),
		oldPassword:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		confirmpassword:new FormControl('', [Validators.required]),

    });
  }

  updateSeller(){
    this.sellerService.updateSeller(sessionStorage.getItem("sellerId"),this.updateForm.value).subscribe(response=>{
      alert('Updated successfully');
      this.getProfile();
    }, error=>{
      alert('Failed to update');
    });
  }
}