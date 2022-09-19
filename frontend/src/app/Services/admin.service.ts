import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ParcelInterface, UpdateResponseInterface } from '../Interfaces/interfaces';
import { DeleteParcel } from '../Modules/admin/AdminStates/parcel.action';

@Injectable({
  providedIn: 'root'
 
})
export class AdminService {

  baseUrl:string="http://localhost:3000/parcels"
  private subject=new Subject<string>()
  search$=this.subject.asObservable()
  search(txt:string){
    this.subject.next(txt)
  }
  
  
  constructor(private http :HttpClient) { }

  addParcel(parcel:ParcelInterface):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}`,parcel)

  }
  getParcels():Observable<ParcelInterface[]>{
    return this.http.get<ParcelInterface[]>(`${this.baseUrl}`)

  }
  getParcel(id:string):Observable<ParcelInterface[]>{
    return this.http.get<ParcelInterface[]>(`${this.baseUrl}/${id}`)

  }
  deleteParcel(id:string):Observable<{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/${id}`)
  }
  updateParcel(parcel:ParcelInterface):Observable<UpdateResponseInterface>{
    console.log(parcel);
    
    return this.http.patch<UpdateResponseInterface>(`${this.baseUrl}/${parcel.parcel_id?parcel.parcel_id:''}`,parcel)
  }

}
