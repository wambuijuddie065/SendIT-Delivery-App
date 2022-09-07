import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  IsLoggedIn:boolean=false

  constructor() { }

  login(){
    this.IsLoggedIn=true
  }
  logout(){
    this.IsLoggedIn=false
  }
  isAuthenticated(){
    return this.IsLoggedIn
  }
}
