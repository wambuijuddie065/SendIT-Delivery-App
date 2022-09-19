import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginInterface } from 'src/app/Interfaces/interfaces';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string
  password!:string
  @ViewChild('loginForm') loginForm!: NgForm


  constructor(private router:Router,private loginService:LoginService) {
    // localStorage.clear()
   }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.loginForm.valid){
      const client: LoginInterface = this.loginForm.value
      this.loginService.login(client).subscribe((response)=>{
        response.token ? localStorage.setItem('token', response.token) : '';
        response.role ? localStorage.setItem('role', response.role) : '';
        response.name?localStorage.setItem('name',response.name):'';
        response.email?localStorage.setItem('email',response.email):'';
        response.client_id?localStorage.setItem('client_id',response.client_id):'';
        

      })
      const role=localStorage.getItem('role')
      if (role === 'admin') {
        this.router.navigate(['/admin/dashboard'])
        localStorage.setItem('isLoggedIn','true')
      } else if (role==='client') {
        this.router.navigate(['/user/sent-parcels'])
        localStorage.setItem('isLoggedIn','true')
      }
      else{
        this.router.navigate(['/home'])
        localStorage.setItem('isLoggedIn','false')

      }

    }
  
 
  }

}

