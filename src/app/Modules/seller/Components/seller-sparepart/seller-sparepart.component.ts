import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller-sparepart',
  templateUrl: './seller-sparepart.component.html',
  styleUrls: ['./seller-sparepart.component.css']
})
export class SellerSparepartComponent {

	
	ngOnInit(): void {
	}



	constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  openToPost(postModal:any) {
		this.modalService.open(postModal,{size:'lg'});
	}

	openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}

}

