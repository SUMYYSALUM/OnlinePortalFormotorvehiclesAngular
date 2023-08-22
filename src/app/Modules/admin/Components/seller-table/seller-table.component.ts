import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SellerServicesService } from '../../Services/Seller/seller-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Seller } from '../../Services/Seller/Seller';

@Component({
  selector: 'app-seller-table',
  templateUrl: './seller-table.component.html',
  styleUrls: ['./seller-table.component.css']
})
export class SellerTableComponent {

	constructor(config: NgbModalConfig, private modalService: NgbModal,
		private sellerService:SellerServicesService ) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	ngOnInit(): void {
		this.getseller(); 
	}

	// function ya kuwaona sellers
seller!: Seller[];
public getseller(){
	this.sellerService.getseller().subscribe(data =>{
		this.seller=data
		console.log(data)
	})
}

// show or hide old password
showOldPassword: boolean = false;
toggleOldPasswordVisibility(): void {
	this.showOldPassword = !this.showOldPassword;
  }

  // show or hide new password
showNewPassword: boolean = false;
toggleNewPasswordVisibility() {
	this.showNewPassword = !this.showNewPassword;
  }

  // show or hide confirm password
showConfirmPassword: boolean = false;
toggleConfirmPasswordVisibility() {
	this.showConfirmPassword = !this.showConfirmPassword;
  }

Sellersform:FormGroup=new FormGroup({
	firstName: new FormControl('', [Validators.required]),
	lastName: new FormControl('', [Validators.required]),
	username: new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
	password:new FormControl('', [Validators.required]),
	phonenumber:new FormControl('', [Validators.required]),
	region:new FormControl('', [Validators.required]),
	district:new FormControl('', [Validators.required]),
	ward:new FormControl('', [Validators.required]),

});

	open(content:any) {
		this.modalService.open(content,{size:'lg'});
	}

	public newSeller(){
		this.sellerService.addseller(this.Sellersform.value).subscribe(
			(data)=>{
				alert('Saved')
				this.getseller();

				this.Sellersform.reset();
			},
			(error)=>{
				alert('Failed')
			}
		)
	}

	

	
	openToDelete(deleteModal:any) {
		this.modalService.open(deleteModal,{size:'sm'});
	}

	public DeletSeller(id:number){
		this.sellerService.Deleteseller(id).subscribe(
			(data)=>{
				alert('Deleted')
				this.getseller();
			},
			(error)=>{
				alert('Failed')
			}
		)
	}

	openUpdate(Update:any) {
		this.modalService.open(Update,{size:'lg'});
	}


	updateSellersform:FormGroup=new FormGroup({
		sellerId: new FormControl('', [Validators.required]),
		firstName: new FormControl('', [Validators.required]),
		lastName: new FormControl('', [Validators.required]),
		oldPassword:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
		region:new FormControl('', [Validators.required]),
		district:new FormControl('', [Validators.required]),
		ward:new FormControl('', [Validators.required]),
	
	})
	

	
	editSeller(seller: Seller) {
	  
		this.updateSellersform = new FormGroup({
		  sellerId: new FormControl(seller.sellerId, [Validators.required]),
		  firstName: new FormControl(seller.firstName, [Validators.required]),
		  lastName: new FormControl(seller.lastName, [Validators.required]),
		  oldPassword: new FormControl('', [Validators.required]), // Remove the value assignment for oldPassword
		  password: new FormControl('', [Validators.required]),
		  phonenumber: new FormControl(seller.phonenumber, [Validators.required]),
		  region: new FormControl(seller.region, [Validators.required]),
		  district: new FormControl(seller.district, [Validators.required]),
		  ward: new FormControl(seller.ward, [Validators.required]),
		});
	  }
	  



	updateSeller() {
		const sellerId = this.updateSellersform.controls['sellerId'].value;
	
		this.sellerService.Updateseller(sellerId, this.updateSellersform.value).subscribe(
		  (response) => {
			alert('Updated');
			this.getseller();
			// Close the modal programmatically if the update was successful
			this.modalService.dismissAll();
		  },
		  (error) => {
			alert('Failed');
		  }
		);
	  }  
}



