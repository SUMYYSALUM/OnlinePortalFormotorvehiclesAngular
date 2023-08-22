import { Component } from '@angular/core';
import { OrderService } from '../../Services/Order/order.service';

@Component({
  selector: 'app-seller-motor-orders',
  templateUrl: './seller-motor-orders.component.html',
  styleUrls: ['./seller-motor-orders.component.css']
})
export class SellerMotorOrdersComponent {

  constructor(private orderService:OrderService){}

  ngOnInit(){
    this.getSellerOrders();
  }

  orders!: any[]
  getSellerOrders(){
    this.orderService.getMotorOrderSeller(sessionStorage.getItem("sellerId")).subscribe(data=>{
      this.orders = data;
      console.log(data);
    })
  }

}
