import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SparepartService } from '../../Services/Sparepart/sparepart.service';
import { OrdersService } from '../../Services/Orders/orders.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-spare-listings',
  templateUrl: './customer-spare-listings.component.html',
  styleUrls: ['./customer-spare-listings.component.css']
})
export class CustomerSpareListingsComponent {

  selectedSpare: any; // To store the selected motor vehicle details
  Spares: any[] = []; // Initialize Motors as an empty array
  filteredSpares: any[] = []; 

  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    private sparesService: SparepartService, private orderService:OrdersService) {
    config.backdrop = 'static';
    config.keyboard = false;
	this.getSpares();
  }

  orderForm:FormGroup=new FormGroup({
		customerId: new FormControl(sessionStorage.getItem("customerId"), [Validators.required]),
		orderDate: new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
    quantity: new FormControl(0, [Validators.required]),
		partId:new FormControl(0, [Validators.required]),   
	});


  makeOrder(orderModal:any, spare: any) {
    this.selectedSpare = spare; // Store the selected motor vehicle details
    this.modalService.open(orderModal, { size: 'md' });

    this.orderForm=new FormGroup({
      customerId: new FormControl(sessionStorage.getItem("customerId"), [Validators.required]),
      orderDate: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      partId:new FormControl(spare.partId, [Validators.required]),
         
    });

  }

  postOrder(){
    this.orderService.makeSpareOrder(this.orderForm.value).subscribe(respo=>{
      alert("Order was made successfully")
    },
    err=>{
      alert("Failed to make order");
    })
  }



  view(viewModal: any, spare: any) {
    this.selectedSpare = spare; // Store the selected motor vehicle details
    this.modalService.open(viewModal, { size: 'lg' });
  }

  getSpares() {
    this.sparesService.getSpares().subscribe(data => {
      this.Spares = data;
	  this.filteredSpares = data; 
      console.log(data);
    });
  }

  onSearchChange(event: KeyboardEvent) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (!searchTerm || searchTerm.trim() === '') {
      this.filteredSpares = this.Spares;
      return;
    }

    this.filteredSpares = this.Spares.filter(spare => {
      const makeModelCondition = `${spare.motorMake} ${spare.motorModel} ${spare.partName}`.toLowerCase();
      return makeModelCondition.includes(searchTerm.toLowerCase());
    });
  }
}

