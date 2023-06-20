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
seller!: Seller[];

	page = 1;
	pageSize = 4;
	// collectionSize = COUNTRIES.length;
	// countries: Country[];
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

})

updateSellersform:FormGroup=new FormGroup({
	sellerId: new FormControl('', [Validators.required]),
	firstName: new FormControl('', [Validators.required]),
	lastName: new FormControl('', [Validators.required]),
	username: new FormControl('', [Validators.required]),
    email:new FormControl('', [Validators.required]),
	password:new FormControl('', [Validators.required]),
	phonenumber:new FormControl('', [Validators.required]),
	region:new FormControl('', [Validators.required]),
	district:new FormControl('', [Validators.required]),
	ward:new FormControl('', [Validators.required]),

})

	ngOnInit(): void {
		this.getseller(); 
	}

	constructor(config: NgbModalConfig, private modalService: NgbModal,
		private sellerService:SellerServicesService ) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

// function ya kuwaona sellers
	public getseller(){
		this.sellerService.getseller().subscribe(data =>
			{
			this.seller=data
			console.log(data)
		})
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

	open(content:any) {
		this.modalService.open(content,{size:'lg'});
	}

	openUpdate(Update:any) {
		this.modalService.open(Update,{size:'lg'});
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

	editSeller(seller:Seller){
		this.updateSellersform = new FormGroup({
				sellerId: new FormControl(seller.sellerId, [Validators.required]),
				firstName: new FormControl(seller.firstName, [Validators.required]),
				lastName: new FormControl(seller.lastName, [Validators.required]),
				username: new FormControl(seller.username, [Validators.required]),
				email:new FormControl(seller.email, [Validators.required]),
				password:new FormControl(seller.password, [Validators.required]),
				phonenumber:new FormControl(seller.phonenumber, [Validators.required]),
				region:new FormControl(seller.region, [Validators.required]),
				district:new FormControl(seller.district, [Validators.required]),
				ward:new FormControl(seller.ward, [Validators.required]),

		})
	}

	updateSeller(){
		this.sellerService.Updateseller(this.updateSellersform.controls["sellerId"].value, 
		this.updateSellersform.value).subscribe(response=>{
			alert('Updated')
			this.getseller();
		},
		(error)=>{
			alert('Failed')
		})
	}
}



