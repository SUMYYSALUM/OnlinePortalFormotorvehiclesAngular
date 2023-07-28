import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/motorvehicle"
const myUrl = url+"/seller"

@Injectable({
  providedIn: 'root'
})
export class MotorvehicleService {

  constructor(private http:HttpClient) { }

  addMotor(data:any){
    return this.http.post(`${url}`, data);
  }

  getMotorBySellerId(id:any){
    return this.http.get<any[]>(`${myUrl}/${id}`)
  }

  UpdateMotor(id:number,data: any){
    return this.http.put(`${url}/${id}`,data)
  }

  DeleteMotor(id:number){
    return this.http.delete(`${url}/${id}`)
  }

  CountMotors(){
    return this.http.get(`${url}/seller/count`)
  }

}
