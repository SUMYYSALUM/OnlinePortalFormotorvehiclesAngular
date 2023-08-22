import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/sparepart"

@Injectable({
  providedIn: 'root'
})
export class SparesService {

  constructor(private http:HttpClient) { }

  getSpares(){
    return this.http.get<any[]>(`${url}`)
  }

  UpdateSpares(id:number,data: any){
    return this.http.put(`${url}/${id}`,data)
  }
  DeleteSpares(id:number){
    return this.http.delete(`${url}/${id}`)
  }
  
  CountSpares(){
    return this.http.get(`${url}/count`)
  }

}
