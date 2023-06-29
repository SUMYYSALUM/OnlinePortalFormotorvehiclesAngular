import { Component } from '@angular/core';
import { SellerServicesService } from '../../Services/Seller/seller-services.service';
import { CustomerService } from '../../Services/Customer/customer.service';
import { MotorsService } from '../../Services/Motors/motors.service';
import { SparesService } from '../../Services/Spares/spares.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private sellerSevice:SellerServicesService, private customerService:CustomerService,
    private motorService:MotorsService, private spareService:SparesService){  
  }

  ngOnInit(){
    this.countAll();

  }

  sellerNo: any
  customerNo:any
  motorNo:any
  spareNo: any
  countAll(){
    this.sellerSevice.CountSellers().subscribe(data=>{
      this.sellerNo=data
    })
    this.customerService.CountCustomers().subscribe(data=>{
      this.customerNo=data
    })
    this.motorService.CountMotors().subscribe(data=>{
      this.motorNo=data
    })
    this.spareService.CountSpares().subscribe(data=>{
      this.spareNo=data
    })


  }

}


