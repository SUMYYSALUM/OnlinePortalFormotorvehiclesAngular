import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/sparepart"
const myUrl = url+"/seller"

@Injectable({
  providedIn: 'root'
})
export class SparepartService {

  constructor(private http:HttpClient) { }

  addSpare(data:any){
    return this.http.post(`${url}`, data);
  }

  getSparesBySellerId(id:any){
    return this.http.get<any[]>(`${myUrl}/${id}`);
  }

  
  countSparesBySellerId(id:any){
    return this.http.get<any>(`${myUrl}/count/${id}`);
  }

  UpdateSpares(id:number,data: any){
    return this.http.put(`${url}/${id}`,data)
  }

  DeleteSpares(id:number){
    return this.http.delete(`${url}/${id}`)
  }

  CountSpares(){
    return this.http.get(`${url}/seller/count`)
  }

}

