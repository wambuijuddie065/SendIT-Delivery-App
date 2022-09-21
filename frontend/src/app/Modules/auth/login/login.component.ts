import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginInterface } from 'src/app/Interfaces/interfaces';
import { AuthService } from 'src/app/Services/auth.service';
import { AppState } from '../../user/UserStates/reducers';
import * as parcelActions from '../../user/UserStates/actions'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private router: Router, private authService: AuthService,private store:Store<AppState>) {
    // localStorage.clear()
  
  }

  ngOnInit(): void {

  }

  onLogin() {
    if (this.loginForm.valid) {
      const client= this.loginForm.value;
     
      this.authService.login(client).subscribe((response) => {
      console.log(response)
        response.token ? localStorage.setItem('token', response.token) : '';
        response.role ? localStorage.setItem('role', response.role) : '';
        response.name ? localStorage.setItem('name', response.name) : '';
        response.email ? localStorage.setItem('email', response.email) : '';
        response.client_id? localStorage.setItem('client_id', response.client_id): '';
       


        this.router.navigate(
          response.role==='admin'?['/admin/dashboard']:response.role==='client'?['/user/sent-parcels']:['/']
        )

      
      });
     
     
    }
  }

}
