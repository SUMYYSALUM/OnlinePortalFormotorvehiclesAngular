import { Component } from '@angular/core';
import { OrdersService } from '../../Services/Orders/orders.service';

@Component({
  selector: 'app-customer-spare-orders',
  templateUrl: './customer-spare-orders.component.html',
  styleUrls: ['./customer-spare-orders.component.css']
})
export class CustomerSpareOrdersComponent {

  constructor(private orderService:OrdersService){}

  ngOnInit(){
    this.getSellerOrders();
  }

  orders!: any[]
  getSellerOrders(){
    this.orderService.getSpareOrderCustomer(sessionStorage.getItem("customerId")).subscribe(data=>{
      this.orders = data;
      console.log(data);
    })
  }


}

