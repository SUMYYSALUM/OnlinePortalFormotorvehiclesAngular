import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/motorvehicle"


@Injectable({
  providedIn: 'root'
})
export class MotorvehicleService {

  constructor(private http:HttpClient) { }

  getMotors(){
    return this.http.get<any[]>(`${url}`)
  }

  CountMotors(){
    return this.http.get(`${url}/count`)
  }

}
