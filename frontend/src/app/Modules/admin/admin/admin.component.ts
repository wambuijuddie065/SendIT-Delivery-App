import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
;
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout()
    this.router.navigate(['/home'])

  }

}
