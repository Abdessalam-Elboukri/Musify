import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from "../../services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class GuardRoleGuard implements CanActivate {
  roles:String[]=[]
  constructor(private storageService:StorageService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    let roles = this.storageService.getUser().authorities
    console.log(roles)
    for (let i = 0 ; i < roles.length ; i++) {
      this.roles.push(roles[i].authority)
    }

    return this.roles.includes(route.data['role'])

  }


}
