import { Component } from '@angular/core';
import { OrderService } from '../../Services/Order/order.service';

@Component({
  selector: 'app-seller-spare-orders',
  templateUrl: './seller-spare-orders.component.html',
  styleUrls: ['./seller-spare-orders.component.css']
})
export class SellerSpareOrdersComponent {

  constructor(private orderService:OrderService){}

  ngOnInit(){
    this.getSellerOrders();
  }

  orders!: any[]
  getSellerOrders(){
    this.orderService.getSpareOrderSeller(sessionStorage.getItem("sellerId")).subscribe(data=>{
      this.orders = data;
      console.log(data);
    })
  }


}
