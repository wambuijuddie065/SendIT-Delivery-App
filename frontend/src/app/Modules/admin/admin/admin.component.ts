import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchText:string=''
  name=localStorage.getItem('name')

  constructor(private authService:AuthService,private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['/home'])

  }
  onChange(){

  this.adminService.search(this.searchText)}

}
