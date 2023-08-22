import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url=environment.Baseurl+"/sparepart"


@Injectable({
  providedIn: 'root'
})
export class SparepartService {

  constructor(private http:HttpClient) { }

  getSpares(){
    return this.http.get<any[]>(`${url}`)
  }

  CountSpares(){
    return this.http.get(`${url}/count`)
  }

}
