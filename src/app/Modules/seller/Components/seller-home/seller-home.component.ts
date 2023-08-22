import { Component } from '@angular/core';
import { MotorvehicleService } from '../../Services/Motorvehicle/motorvehicle.service';
import { SparepartService } from '../../Services/Sparepart/sparepart.service';
import { OrderService } from '../../Services/Order/order.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {

  constructor(private motorService:MotorvehicleService, private spareService:SparepartService,
    private orderService:OrderService){}

  ngOnInit(){
    this.countMotors();
    this.countSpares();
    this.countMotorsOrders();
    this.countSparesOrders();
  }

  sparesNo!:any
  countSpares(){
    this.spareService.countSparesBySellerId(sessionStorage.getItem("sellerId")).subscribe(response=>{
      this.sparesNo=response;
    })
  }

  motorsNo!:any
  countMotors(){
    this.motorService.countMotorBySellerId(sessionStorage.getItem("sellerId")).subscribe(response=>{
      this.motorsNo=response;
    })
  }

  motorsOrderNo!:any
  countMotorsOrders(){
    this.orderService.countMotorOrderSeller(sessionStorage.getItem("sellerId")).subscribe(response=>{
      this.motorsOrderNo=response;
    })
  }

  spareOrdersNo!:any
  countSparesOrders(){
    this.orderService.countSpareOrderSeller(sessionStorage.getItem("sellerId")).subscribe(response=>{
      this.spareOrdersNo=response;
    })
  }

}
