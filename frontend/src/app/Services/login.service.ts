import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:3000/users"
  loggedIn:boolean=false

  constructor(private http: HttpClient,private router:Router) { }
  login(user: LoginInterface): Observable<LoginInterface> {
    return this.http.post<LoginInterface>(`${this.baseUrl}`, user);
  }
  IsLoggedIn() {
    this.loggedIn=true
  
    return localStorage.getItem('token')
  }
  logout(){
    this.loggedIn=false
    this.router.navigate(['/home'])
    localStorage.clear()
  }
  isAuthenticated(){
    return this.IsLoggedIn()
  }
  

}


