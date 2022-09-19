import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginInterface } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl="http://localhost:5000/clients/login"
  // loggedIn:boolean=false

  constructor(private http: HttpClient,private router:Router) { }
  login(client: LoginInterface): Observable<LoginInterface> {
    return this.http.post<LoginInterface>(`${this.baseUrl}`, client);
  }
  IsLoggedIn() {
    // this.loggedIn=true
    return localStorage.getItem('token')
  }
  logout(){
    // this.loggedIn=false
    localStorage.clear()
    this.router.navigate(['/home'])
    
  }
  isAuthenticated(){
    return this.IsLoggedIn()
  }
  

}


