import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../../services/user.service";
import {StorageService} from "../../services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token!:any
  constructor(private storageService:StorageService,
              private router:Router
) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token = this.storageService.getToken();
    let user = this.storageService.getUser();
    if (this.storageService.getToken() && user.exp*1000 >= new Date().getTime()){
      return true;
    }
    localStorage.clear()
    this.router.navigate(['/login'])
    return false;
  }

}
