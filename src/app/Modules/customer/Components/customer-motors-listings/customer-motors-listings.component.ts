import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MotorvehicleService } from '../../Services/Motorvehicle/motorvehicle.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdersService } from '../../Services/Orders/orders.service';

@Component({
  selector: 'app-customer-motors-listings',
  templateUrl: './customer-motors-listings.component.html',
  styleUrls: ['./customer-motors-listings.component.css']
})
export class CustomerMotorsListingsComponent {

  selectedMotor: any; // To store the selected motor vehicle details
  Motors: any[] = []; // Initialize Motors as an empty array
  filteredMotors: any[] = []; 

  constructor(config: NgbModalConfig, private modalService: NgbModal, 
    private motorsService: MotorvehicleService,
    private orderService:OrdersService, private formBuilder:FormBuilder) {
    config.backdrop = 'static';
    config.keyboard = false;
	this.getMotors();
  }

  orderForm:FormGroup=new FormGroup({
		customerId: new FormControl(sessionStorage.getItem("customerId"), [Validators.required]),
		orderDate: new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
    quantity: new FormControl(0, [Validators.required]),
		motorId:new FormControl(0, [Validators.required]),   
	});


  makeOrder(orderModal:any, motor: any) {
    this.selectedMotor = motor; // Store the selected motor vehicle details
    this.modalService.open(orderModal, { size: 'md' });

    this.orderForm=new FormGroup({
      customerId: new FormControl(sessionStorage.getItem("customerId"), [Validators.required]),
      orderDate: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      motorId:new FormControl(motor.motorId, [Validators.required]),

    });

  }

  postOrder(){
    this.orderService.makeMotorOrder(this.orderForm.value).subscribe(respo=>{
      alert("Order was made successfully")
    },
    err=>{
      alert("Failed to make order");
    })
  }


  view(viewModal: any, motor: any) {
    this.selectedMotor = motor; // Store the selected motor vehicle details
    this.modalService.open(viewModal, { size: 'lg' });
  }

  getMotors() {
    this.motorsService.getMotors().subscribe(data => {
      this.Motors = data;
	  this.filteredMotors = data; 
      console.log(data);
    });
  }

  onSearchChange(event: KeyboardEvent) {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (!searchTerm || searchTerm.trim() === '') {
      this.filteredMotors = this.Motors;
      return;
    }

    this.filteredMotors = this.Motors.filter(motor => {
      const makeModelCondition = `${motor.motorMade} ${motor.motorModel} ${motor.motorCondition} ${motor.motorName}`.toLowerCase();
      return makeModelCondition.includes(searchTerm.toLowerCase());
    });
  }
}
