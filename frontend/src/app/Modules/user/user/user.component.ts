import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/Guards/auth-guard.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authGuard:AuthGuardService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authGuard.logout()
    this.router.navigate(['/home'])

  }

}
