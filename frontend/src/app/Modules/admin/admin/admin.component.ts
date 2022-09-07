import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/Guards/auth-guard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authGuard:AuthGuardService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authGuard.logout()
    this.router.navigate(['/home'])

  }

}
