import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl="http://localhost:3000/clients"

  constructor(private http:HttpClient) { }
// signUp(user:SignupInterface):Observable<SignupInterface>{
//   return this.http.post<SignupInterface>(`${this.baseUrl}`,user)

// }
signUp(client:SignupInterface):Observable<{message:string}>{
  return this.http.post<{message:string}>(`${this.baseUrl}`, client)
}
getclients(): Observable<SignupInterface[]>{
  return this.http.get<SignupInterface[]>(`${this.baseUrl}`)
}

}
