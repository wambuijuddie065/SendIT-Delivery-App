import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/Guards/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string
  password!:string

  constructor(private router:Router,private authGuard:AuthGuardService) { }

  ngOnInit(): void {
  }
  onLogin(){

    this.router.navigate(['/admin/dashboard'])
    this.authGuard.login()
      
    // if(this.email !== 'admin@gmail.com' && this.password !== '@Admin254' ){
    //   this.router.navigate(['/user/sent-parcels'])
    //   this.authGuard.login()
      
    // }
    // else{
    //   this.router.navigate(['/admin/dashboard'])
      
    //   this.authGuard.login()

    // }
    
    
    
  }

}
