import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserApp} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly base_url = environment.BASE_URL+"/users";

  constructor(private http:HttpClient) {
  }


  //signup
  signup(user:UserApp):Observable<any>{
      return this.http.post<any>(`${this.base_url}/signup`,user)
  }

  login(user:UserApp):Observable<any>{
    return this.http.post<any>(`${this.base_url}/login`,user)
  }


}
