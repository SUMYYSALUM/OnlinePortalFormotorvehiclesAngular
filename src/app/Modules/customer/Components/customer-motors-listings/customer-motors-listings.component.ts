import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-motors-listings',
  templateUrl: './customer-motors-listings.component.html',
  styleUrls: ['./customer-motors-listings.component.css']
})
export class CustomerMotorsListingsComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  view(viewModal:any) {
		this.modalService.open(viewModal,{size:'lg'});
	}




}
