import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SellerService } from '../../Services/Seller/seller.service';

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
    })
  }

  openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}


}
