import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../Services/login.service';


@Injectable({
  providedIn: 'root'
})
export class ParcelsGuardService  implements CanActivate{

  constructor(private loginService:LoginService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.loginService.isAuthenticated()){
      return true
    } else {
      this.router.navigate(['/home'])
      return false
    }
  }
}
