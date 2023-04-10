import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
>>>>>>> ca7c3f577aac473e1a1771cbf093d7b048c2a597

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

<<<<<<< HEAD
  constructor() { }
=======
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

>>>>>>> ca7c3f577aac473e1a1771cbf093d7b048c2a597
}
