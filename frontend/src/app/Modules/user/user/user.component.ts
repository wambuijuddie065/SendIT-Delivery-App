import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout()
    this.router.navigate(['/home'])

  }
  sentParcels(){
    this.router.navigate(['/user/sent-parcels'])

  }
  receivedParcels(){
    this.router.navigate(['/user/received-parcels'])

  }

}
