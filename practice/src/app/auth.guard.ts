import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from './users.service'
import {LoginComponent} from './login/login.component'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   constructor(private user:UsersService,){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      //window.localStorage.setItem('key', 'value');
      //window.localStorage.getItem('key');




      
      return true;
  
    }  
  
}
