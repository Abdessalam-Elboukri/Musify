import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserApp} from "../models/user";
import {Observable} from "rxjs";
import {Album} from "../models/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private readonly base_url = environment.BASE_URL+"/albums";

  constructor(private http:HttpClient) {
  }


  //getAlbumsByArtist
  getAlbumsByArtist(email:string):Observable<any>{
    return this.http.get(`${this.base_url}/albums-by-artist/${email}`)
  }

  //add album
  addAlbum(albumData:FormData):Observable<any>{
    return this.http.post(`${this.base_url}/add-album`,albumData)

  }

}
