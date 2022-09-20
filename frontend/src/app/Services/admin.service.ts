import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ParcelInterface, UpdateResponseInterface } from '../Interfaces/interfaces';
import { DeleteParcel } from '../Modules/admin/AdminStates/parcel.action';

@Injectable({
  providedIn: 'root'
 
})
export class AdminService {
  token=localStorage.getItem('token') as string

  baseUrl:string="http://localhost:5000/parcels"
  private subject=new Subject<string>()
  search$=this.subject.asObservable()
  search(txt:string){
    this.subject.next(txt)
  }
  
  
  constructor(private http :HttpClient) { }

  addParcel(parcel:ParcelInterface):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/add`,parcel)

  }
  getParcels():Observable<ParcelInterface[]>{
    return this.http.get<ParcelInterface[]>(`${this.baseUrl}`,{
      headers:new HttpHeaders({
        token:this.token

      })
    })

  }
  getParcel(parcel_id:string):Observable<ParcelInterface[]>{
    return this.http.get<ParcelInterface[]>(`${this.baseUrl}/${parcel_id}`)

  }
  deleteParcel(parcel_id:string):Observable<{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/delete/${parcel_id}`)
  }
  updateParcel(parcel:ParcelInterface):Observable<UpdateResponseInterface>{
    console.log(parcel);
    
    return this.http.patch<UpdateResponseInterface>(`${this.baseUrl}/deliver/${parcel.parcel_id?parcel.parcel_id:''}`,parcel)
  }
  showName(email:string):Observable<string>{
    const url="http://localhost:5000/clients/name"
    return this.http.get<string>(`${url}/${email}`,) 
  }

}
