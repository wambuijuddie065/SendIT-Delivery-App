import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ParcelInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  email=localStorage.getItem('email') as string

  private subject=new Subject<string>()
  search$=this.subject.asObservable()
  search(txt:string){
    this.subject.next(txt)
  }

  constructor(private http:HttpClient) { }
  getSentParcels():Observable<ParcelInterface[]>{
    
   return this.http.get<ParcelInterface[]>(`http://localhost:5000/parcels/sender/${this.email}`)
   
   
  }
  getReceivedParcels():Observable<ParcelInterface[]>{
    
   return this.http.get<ParcelInterface[]>(`http://localhost:5000/parcels/receiver/${this.email}`)
   
   
  }
}
