import { Component } from '@angular/core';
import { SparepartService } from '../../Services/Sparepart/sparepart.service';
import { MotorvehicleService } from '../../Services/Motorvehicle/motorvehicle.service';
import { OrdersService } from '../../Services/Orders/orders.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent {

  constructor(private spareService:SparepartService, 
    private motorService:MotorvehicleService,
    private orderService:OrdersService){}

  ngOnInit(){
    this.countMotors();
    this.countSpares();
    this.countMotorsOrders();
    this.countSparesOrders();
  }

  SparesNo!: any
  countSpares(){
    this.spareService.CountSpares().subscribe(response=>{
      this.SparesNo=response;
    })
  }

  MotorsNo!: any
  countMotors(){
    this.motorService.CountMotors().subscribe(response=>{
      this.MotorsNo=response;
    })
  }

  SparesOrdersNo!: any
  countSparesOrders(){
    this.orderService.countSpareOrderCustomer(sessionStorage.getItem("customerId")).subscribe(response=>{
      this.SparesOrdersNo=response;
    })
  }

  MotorsOrdersNo!: any
  countMotorsOrders(){
    this.orderService.countMotorOrderCustomer(sessionStorage.getItem("customerId")).subscribe(response=>{
      this.MotorsOrdersNo=response;
    })
  }



}
