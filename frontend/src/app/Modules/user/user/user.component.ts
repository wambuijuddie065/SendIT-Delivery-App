import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name=localStorage.getItem('name')
  searchText:string=''

  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute,
    private userService:UserService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['/home'])

  }

  onChange(){

    this.userService.search(this.searchText)
    }

}
