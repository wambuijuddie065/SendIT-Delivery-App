import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParcelInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
 
})
export class AdminService {

  baseUrl:string="http://localhost:3000/parcels"
  constructor(private http :HttpClient) { }

  addParcel(parcel:ParcelInterface):Observable<ParcelInterface>{
    return this.http.post<ParcelInterface>(`${this.baseUrl}`,parcel)

  }
  getParcels():Observable<ParcelInterface[]>{
    return this.http.get<ParcelInterface[]>(`${this.baseUrl}`)

  }

}
