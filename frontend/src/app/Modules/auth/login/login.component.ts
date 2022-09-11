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
    localStorage.setItem("email",'admin@gmail.com')
    localStorage.setItem("password",'@Admin254')
   }

  ngOnInit(): void {
  }

  onLogin(){


    const token = localStorage.setItem("token", 'zxdcfgvhbjnmk897654@@@33#')

    let email = localStorage.getItem("email")
    let password = localStorage.getItem("password")

    const user: LoginInterface = this.loginForm.value
    console.log(user);
    

    if(user.email === email || user.password === password){
      this.router.navigate(['/admin/dashboard'])
      
    }else{
      this.router.navigate(['/user/sent-parcels'])
      
     

    }
    
  }
  
      
  
    
    
    
  }

