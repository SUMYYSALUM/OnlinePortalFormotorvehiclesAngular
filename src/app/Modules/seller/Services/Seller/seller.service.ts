import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/seller"

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  sellerLogin(data:any){
    return this.http.post(`${url}/login`, data);
  }

  getSellerById(id:any){
    return this.http.get(`${url}/${id}`)
  }

  addSeller(data:any){
    return this.http.post(`${url}`, data);
  }

  updateSeller(id:any, data:any){
    return this.http.put(`${url}/${id}`, data)
  }


}
