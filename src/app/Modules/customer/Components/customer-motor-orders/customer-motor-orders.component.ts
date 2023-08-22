import { Component } from '@angular/core';
import { OrdersService } from '../../Services/Orders/orders.service';

@Component({
  selector: 'app-customer-motor-orders',
  templateUrl: './customer-motor-orders.component.html',
  styleUrls: ['./customer-motor-orders.component.css']
})
export class CustomerMotorOrdersComponent {

  constructor(private orderService:OrdersService){}

  ngOnInit(){
    this.getSellerOrders();
  }

  orders!: any[]
  getSellerOrders(){
    this.orderService.getMotorOrderCustomer(sessionStorage.getItem("customerId")).subscribe(data=>{
      this.orders = data;
      console.log(data);
    })
  }

}

