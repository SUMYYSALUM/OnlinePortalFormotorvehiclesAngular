import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MotorsService } from 'src/app/Modules/admin/Services/Motors/motors.service';
import { MotorvehicleService } from '../../Services/Motorvehicle/motorvehicle.service';

@Component({
  selector: 'app-seller-motor-vehicles',
  templateUrl: './seller-motor-vehicles.component.html',
  styleUrls: ['./seller-motor-vehicles.component.css']
})
export class SellerMotorVehiclesComponent {

  	
	ngOnInit(): void {
		this.getMotor();
	}



	constructor(config: NgbModalConfig, private modalService: NgbModal, private motorService:MotorvehicleService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  	openToPost(postModal:any) {
		this.modalService.open(postModal,{size:'lg'});
	}

		MotorvehiclesPostForm:FormGroup=new FormGroup({
			sellerId: new FormControl(sessionStorage.getItem("sellerId")),
			Identificationnumber: new FormControl('', [Validators.required]),
			Interiorcolor: new FormControl('', [Validators.required]),
			Extiriorcolor: new FormControl('', [Validators.required]),
			Fueltype:new FormControl('', [Validators.required]),
			Transmissiontype:new FormControl('', [Validators.required]),
			motorCondition: new FormControl(sessionStorage.getItem("sellerId")),
			motorPrice: new FormControl('', [Validators.required]),
			motorMileage: new FormControl('', [Validators.required]),
			motorMake: new FormControl('', [Validators.required]),
			motorMade:new FormControl('', [Validators.required]),
			releaseYear:new FormControl('', [Validators.required])

		
		});
	

		addMotor(){
			this.motorService.addMotor(this.MotorPostForm.value).subscribe(response=>{
				alert("Motorvehicle added successfully")
				this.getMotor();
				this.modalService.dismissAll()
			},

			 error=>{
				alert("Failed to add Motorvehicle")
			})
		}

		motorsList!: any[]
	
		getMotor(){
		this.motorService.getMotorBySellerId(sessionStorage.getItem("sellerId")).subscribe(data=>{
			console.log(data);
			this.motorsList=data;
		})
	}

	openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}

	MotorPostForm:FormGroup=new FormGroup({
		sellerId: new FormControl(sessionStorage.getItem("sellerId")),
		identification: new FormControl('', [Validators.required]),
		interiorColor: new FormControl('', [Validators.required]),
		exteriorColor: new FormControl('', [Validators.required]),
		fuelType:new FormControl('', [Validators.required]),
		transmissionType:new FormControl('', [Validators.required]),
		motorCondition: new FormControl(sessionStorage.getItem("sellerId")),
		motorPrice: new FormControl('', [Validators.required]),
		motorMileage: new FormControl('', [Validators.required]),
		motorModel: new FormControl('', [Validators.required]),
		motorMade:new FormControl('', [Validators.required]),
		releaseYear:new FormControl('', [Validators.required])

	
	});

	MotorUpdateForm:FormGroup=new FormGroup({
		sellerId: new FormControl(sessionStorage.getItem("sellerId")),
		motorId: new FormControl('', [Validators.required]),
		identification: new FormControl('', [Validators.required]),
		interiorColor: new FormControl('', [Validators.required]),
		exteriorColor: new FormControl('', [Validators.required]),
		fuelType:new FormControl('', [Validators.required]),
		transmissionType:new FormControl('', [Validators.required]),
		motorCondition: new FormControl(sessionStorage.getItem("sellerId")),
		motorPrice: new FormControl('', [Validators.required]),
		motorMileage: new FormControl('', [Validators.required]),
		motorModel: new FormControl('', [Validators.required]),
		motorMade:new FormControl('', [Validators.required]),
		releaseYear:new FormControl('', [Validators.required])
	
	});


	editMotors(motor:any){
		this.MotorUpdateForm = new FormGroup({
		sellerId: new FormControl(sessionStorage.getItem("sellerId")),
		motorId: new FormControl(motor.motorId, [Validators.required]),
		identification: new FormControl(motor.identification, [Validators.required]),
		interiorColor: new FormControl(motor.interiorColor, [Validators.required]),
		exteriorColor: new FormControl(motor.exteriorColor, [Validators.required]),
		fuelType:new FormControl(motor.fuelType, [Validators.required]),
		transmissionType:new FormControl(motor.transmissionType, [Validators.required]),
		motorCondition: new FormControl(sessionStorage.getItem("sellerId")),
		motorPrice: new FormControl(motor.motorPrice, [Validators.required]),
		motorMileage: new FormControl(motor.motorMileage, [Validators.required]),
		motorModel: new FormControl(motor.motorModel, [Validators.required]),
		motorMade:new FormControl(motor.motorMade, [Validators.required]),
		releaseYear:new FormControl(motor.releaseYear, [Validators.required])
	
		
		})
	
	}
	updateMotors(){
		this.motorService.UpdateMotor(this.MotorUpdateForm.controls["motorId"].value, 
		this.MotorUpdateForm.value).subscribe(response=>{
			alert('Updated')
			this.getMotor();
			this.modalService.dismissAll()
		},
		(error)=>{
			alert('Failed')
		})
	}

		openToDelete(deleteModal:any) {
			this.modalService.open(deleteModal,{size:'sm'});
		}
	
	
		deleteMotor(id:number){
			this.motorService.DeleteMotor(id).subscribe(response=>{
				alert('Deleted Successfully!')
				this.getMotor();
			}, error=>{
				alert('Failed to delete!')
			})
		}
	
	
	}