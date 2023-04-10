import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ApiResponse} from "../interfaces/api-response";
import {Page} from "../interfaces/page";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})

export class UserService{

  private readonly base_url = environment.BASE_URL+"/users";

  constructor(private http:HttpClient) {
  }


  //retrieve all users
  getUsers(userName:string='',page:number=0,size:number=50):Observable<ApiResponse<Page<User>>>{
    return this.http.get<any>(`${this.base_url}/all-users?userName=${userName}&page=${page}&size=${size}`)
  }

}
