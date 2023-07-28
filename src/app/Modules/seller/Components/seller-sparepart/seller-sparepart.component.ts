import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SparepartService } from '../../Services/Sparepart/sparepart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-sparepart',
  templateUrl: './seller-sparepart.component.html',
  styleUrls: ['./seller-sparepart.component.css']
})
export class SellerSparepartComponent {

	
	ngOnInit(): void {
		this.getSpares();
	}

	constructor(config: NgbModalConfig, private modalService: NgbModal,
		private spareService:SparepartService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	// kutia data mpya
  	openToPost(postModal:any) {
		this.modalService.open(postModal,{size:'lg'});
	}

	SparePostForm:FormGroup=new FormGroup({
		sellerId: new FormControl(sessionStorage.getItem("sellerId")),
		partName: new FormControl('', [Validators.required]),
		price: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required]),
		motorMake:new FormControl('', [Validators.required]),
		motorModel:new FormControl('', [Validators.required])
	
	});
	

	addSpare(){
		this.spareService.addSpare(this.SparePostForm.value).subscribe(response=>{
			alert("Spare part added successfully")
			this.getSpares();
			this.modalService.dismissAll()
		},
		
		error=>{
			alert("Failed to add sparepart")
		})
	}

	// inaishia hapa

	// kuziona data

	sparesList!: any[]
	getSpares(){
		this.spareService.getSparesBySellerId(sessionStorage.getItem("sellerId")).subscribe(data=>{
			console.log(data);
			this.sparesList=data;
		})
	}

	// inaishia hapa


	// kuupdate data

	openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}

	SpareUpdateform:FormGroup=new FormGroup({
		partId: new FormControl('', [Validators.required]),
		partName: new FormControl('', [Validators.required]),
		price: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required]),
		motorMake:new FormControl('', [Validators.required]),
		motorModel:new FormControl('', [Validators.required])
	
	});

	editSpare(spare:any){
		this.SpareUpdateform = new FormGroup({
				partId: new FormControl(spare.partId, [Validators.required]),
				partName: new FormControl(spare.partName, [Validators.required]),
				price: new FormControl(spare.price, [Validators.required]),
				description: new FormControl(spare.description, [Validators.required]),
				motorMake:new FormControl(spare.motorMake, [Validators.required]),
				motorModel:new FormControl(spare.motorModel, [Validators.required])


		})
	}

	updateSpare(){
		this.spareService.UpdateSpares(this.SpareUpdateform.controls["partId"].value, 
		this.SpareUpdateform.value).subscribe(response=>{
			alert('Updated')
			this.getSpares();
			this.modalService.dismissAll()
		},
		(error)=>{
			alert('Failed')
		})
	}


	// inaishia hapa
	


	// kudelete data
	openToDelete(deleteModal:any) {
		this.modalService.open(deleteModal,{size:'sm'});
	}


	deleteSpare(id:number){
		this.spareService.DeleteSpares(id).subscribe(response=>{
			alert('Deleted Successfully!')
			this.getSpares();
		}, error=>{
			alert('Failed to delete!')
		})
	}

	// inaishia hapa

}

