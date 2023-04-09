import {Injectable} from "@angular/core";

const USER_KEY = 'token-auth';

@Injectable({
  providedIn : "root"
})
export class StorageService{



  constructor() {
  }

  clean(): void {
    localStorage.clear();
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, user);
  }

  public getToken(): any {
    return localStorage.getItem(USER_KEY);
  }

  public getUser():any{
    const token = localStorage.getItem(USER_KEY);
    if(token)
      return JSON.parse(atob(token.split('.')[1]))
  }


  public getAuthority():string{
    return this.getUser().authorities[0].authority;
  }



  public isLoggedIn(): boolean {
    const user = localStorage.getItem(USER_KEY);
    return !!user;

  }
}
