import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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

  //
  getAll():Observable<any>{
    return this.http.get(`${this.base_url}/all-albums`)
  }

  //getAlbumByRef
  getAlbumByRef(ref:string):Observable<any>{
    return this.http.get(`${this.base_url}/get-by-reference/${ref}`)
  }

}
