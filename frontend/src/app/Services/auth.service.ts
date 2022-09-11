import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  IsLoggedIn:boolean=false

  constructor() { }

  login(){
  
    this.IsLoggedIn=true
    return localStorage.getItem('token')
  }
  logout(){
    this.IsLoggedIn=false
    localStorage.clear()
  }
  isAuthenticated(){
   
    return this.IsLoggedIn
  }
}
