import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/customer"


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  customerLogin(data:any){
    return this.http.post(`${url}/login`, data);
  }

  getCustomerById(id:any){
    return this.http.get(`${url}/${id}`)
  }

  addCustomer(data:any){
    return this.http.post(`${url}`, data);
  }

  updateCustomer(id:any, data:any){
    return this.http.put(`${url}/${id}`, data)
  }


}
