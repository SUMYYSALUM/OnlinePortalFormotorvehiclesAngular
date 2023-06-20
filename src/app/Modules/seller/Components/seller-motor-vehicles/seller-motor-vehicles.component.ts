import { Component, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seller-motor-vehicles',
  templateUrl: './seller-motor-vehicles.component.html',
  styleUrls: ['./seller-motor-vehicles.component.css']
})
export class SellerMotorVehiclesComponent {

  	
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
