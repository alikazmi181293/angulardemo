import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private route : Router)
  {

  }

  canActivate(next : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean
  {
      if(localStorage.getItem('userToken')!=null)
        return true;
      this.route.navigate(['/login']);
      return false;
  }

}
