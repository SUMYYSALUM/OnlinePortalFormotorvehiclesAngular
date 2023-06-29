import { Component } from '@angular/core';
import { SparesService } from '../../Services/Spares/spares.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-spareparts',
  templateUrl: './all-spareparts.component.html',
  styleUrls: ['./all-spareparts.component.css']
})
export class AllSparepartsComponent {

  constructor(private spareService:SparesService, config: NgbModalConfig, private modalService: NgbModal,){
    // customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
  }
  ngOnInit(){
    this.getSpares();
  }

  Spares!:any[]
  getSpares(){
    this.spareService.getSpares().subscribe(data=>{
      this.Spares=data;
      console.log(data);
    })
  }

  deleteSpare(id:number){
    this.spareService.DeleteSpares(id).subscribe(data=>{
      this.getSpares();
      alert("deleted successfully")
    }, error=>{
      alert("failed to delete")
    })
  }

  openToDelete(deleteModal:any) {
		this.modalService.open(deleteModal,{size:'sm'});
	}

}
