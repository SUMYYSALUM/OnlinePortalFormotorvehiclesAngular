import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const url = environment.Baseurl;

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  makeSpareOrder(data: any){
    return this.http.post(`${url}/spare-order`, data);
  }

  makeMotorOrder(data: any){
    return this.http.post(`${url}/motor-order`, data);
  }


  getSpareOrderCustomer(id:any){
    return this.http.get<any[]>(`${url}/spare-order/customer/${id}`);
  }

  countSpareOrderCustomer(id:any){
    return this.http.get<any[]>(`${url}/spare-order/customer/count/${id}`);
  }

  getMotorOrderCustomer(id:any){
    return this.http.get<any[]>(`${url}/motor-order/customer/${id}`);
  }

  countMotorOrderCustomer(id:any){
    return this.http.get<any[]>(`${url}/motor-order/customer/count/${id}`);
  }
}
