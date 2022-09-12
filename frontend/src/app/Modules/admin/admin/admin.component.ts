import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
;
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchText:string=''

  constructor(private loginService:LoginService,private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout()
    this.router.navigate(['/home'])

  }
  onChange(){

  this.adminService.search(this.searchText)
  }

}
