import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name=localStorage.getItem('name')

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['/home'])

  }
  sentParcels(){
    this.router.navigate(['/user/sent-parcels'])

  }
  receivedParcels(){
    this.router.navigate(['/user/received-parcels'])

  }

}
