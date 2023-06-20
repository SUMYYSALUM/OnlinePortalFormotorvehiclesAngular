import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/admin"

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http:HttpClient) { }

  adminLogin(data:any){
    return this.http.post(`${url}/login`, data);
  }

  getAdminById(id:any){
    return this.http.get(`${url}/${id}`)
  }

}
