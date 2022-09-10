import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParcelInterface, UpdateResponseInterface } from '../Interfaces/interfaces';
import { DeleteParcel } from '../Modules/admin/AdminStates/parcel.action';

@Injectable({
  providedIn: 'root'
 
})
export class AdminService {

  baseUrl:string="http://localhost:3000/parcels"
  
  
  constructor(private http :HttpClient) { }

  addParcel(parcel:ParcelInterface):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}`,parcel)

  }
  getParcels():Observable<ParcelInterface[]>{
    return this.http.get<ParcelInterface[]>(`${this.baseUrl}`)

  }
  getParcel(id:number):Observable<ParcelInterface[]>{
    return this.http.get<ParcelInterface[]>(`${this.baseUrl}/${id}`)

  }
  deleteParcel(id:number):Observable<{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/${id}`)
  }
  updateParcel(parcel:ParcelInterface):Observable<UpdateResponseInterface>{
    console.log(parcel);
    
    return this.http.patch<UpdateResponseInterface>(`${this.baseUrl}/${parcel.id?parcel.id:''}`,parcel)
  }

}
