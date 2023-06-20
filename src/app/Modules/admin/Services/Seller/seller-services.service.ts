import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Seller } from './Seller';
import { Observable } from 'rxjs';

const url=environment.Baseurl+"/seller"

@Injectable({
  providedIn: 'root'
})
export class SellerServicesService {

  constructor(private http:HttpClient) { }
//service ya kuwaona sellers
  getseller(): Observable<Seller[]>{
    return this.http.get<Seller[]>(`${url}`)
  }

  addseller(data:any){
    return this.http.post(`${url}`,data)
  }
  Updateseller(id:number,seller:Seller){
    return this.http.put(`${url}/${id}`,seller)
  }
  Deleteseller(id:number){
    return this.http.delete(`${url}/${id}`)
  }



}
