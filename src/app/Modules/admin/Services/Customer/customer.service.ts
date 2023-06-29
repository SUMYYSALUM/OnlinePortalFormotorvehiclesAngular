import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from './Customer';

const url=environment.Baseurl+"/customer"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getcustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${url}`)
  }

  addcustomer(data:any){
    return this.http.post(`${url}`,data)
  }
  Updatecustomer(id:number,customer:Customer){
    return this.http.put(`${url}/${id}`,customer)
  }
  Deletecustomer(id:number){
    return this.http.delete(`${url}/${id}`)
  }
  CountCustomers(){
    return this.http.get(`${url}/count`)
  }

}
