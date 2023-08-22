import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.Baseurl;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getSpareOrderSeller(id:any){
    return this.http.get<any[]>(`${url}/spare-order/seller/${id}`);
  }

  countSpareOrderSeller(id:any){
    return this.http.get<any[]>(`${url}/spare-order/seller/count/${id}`);
  }


  getMotorOrderSeller(id:any){
    return this.http.get<any[]>(`${url}/motor-order/seller/${id}`);
  }

  countMotorOrderSeller(id:any){
    return this.http.get<any[]>(`${url}/motor-order/seller/count/${id}`);
  }





}
