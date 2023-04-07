import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserApp} from "../models/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private readonly base_url = environment.BASE_URL+"/albums";

  constructor(private http:HttpClient) {
  }


  //getAlbumsByArtist
  getAlbumsByArtist(ref:string):Observable<any>{
    return this.http.get(`${this.base_url}/getalbums-by-artist/${ref}`)
  }
}
