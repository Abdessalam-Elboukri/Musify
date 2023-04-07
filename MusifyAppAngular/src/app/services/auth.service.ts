import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
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

  login(login:any) {
    return this.http.post(this.base_url+"/login",login ,{
      observe: 'response'
    }).pipe(map((response:HttpResponse<any>) =>{
      const body = response.body;
      return body.data;
    }))
  }


}
