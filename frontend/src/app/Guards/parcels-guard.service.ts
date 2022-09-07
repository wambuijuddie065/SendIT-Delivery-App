import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class ParcelsGuardService  implements CanActivate{

  constructor(private authGuard:AuthGuardService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.authGuard.isAuthenticated()){
      return true
    } else {
      this.router.navigate(['/home'])
      return false
    }
  }
}
