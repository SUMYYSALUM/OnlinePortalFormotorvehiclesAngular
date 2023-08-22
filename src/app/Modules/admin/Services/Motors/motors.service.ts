import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/motorvehicle"

@Injectable({
  providedIn: 'root'
})
export class MotorsService {

  constructor(private http:HttpClient) { }

  getMotors(){
    return this.http.get<any[]>(`${url}`)
  }

  UpdateMotors(id:number,data: any){
    return this.http.put(`${url}/${id}`,data)
  }
  DeleteMotors(id:number){
    return this.http.delete(`${url}/${id}`)
  }
  
  CountMotors(){
    return this.http.get(`${url}/count`)
  }

}
