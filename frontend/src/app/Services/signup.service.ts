import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl="http://localhost:5000/clients/register"

  constructor(private http:HttpClient) { }

signUp(client:SignupInterface):Observable<{message:string}>{
  return this.http.post<{message:string}>(`${this.baseUrl}`, client)
}
getclients(): Observable<SignupInterface[]>{
  return this.http.get<SignupInterface[]>(`${this.baseUrl}`)
}

}
