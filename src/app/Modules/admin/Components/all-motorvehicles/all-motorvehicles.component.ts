import { Component } from '@angular/core';
import { MotorsService } from '../../Services/Motors/motors.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-motorvehicles',
  templateUrl: './all-motorvehicles.component.html',
  styleUrls: ['./all-motorvehicles.component.css']
})
export class AllMotorvehiclesComponent {

  constructor(private motorService:MotorsService, config: NgbModalConfig, private modalService: NgbModal,){
    // customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit(){
    this.getAllMotors();
  }

  Motors!: any[]
  getAllMotors(){
    this.motorService.getMotors().subscribe(data=>{
      this.Motors=data;
      console.log(data);
    })
  }

  deleteMotor(id:number){
    this.motorService.DeleteMotors(id).subscribe(data=>{
      this.getAllMotors();
      alert("deleted successfully");
    }, error=>{
      alert("failed to delete")
    })
  }

  openToDelete(deleteModal:any) {
		this.modalService.open(deleteModal,{size:'sm'});
	}

}
