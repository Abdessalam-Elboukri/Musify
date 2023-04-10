import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly base_url = environment.BASE_URL + "/tracks";

  constructor(private http: HttpClient) {
  }


  //getAlbumsByArtist
  getTracksByAlbums(ref: string): Observable<any> {
    return this.http.get(`${this.base_url}/get-by-album/${ref}`)
  }


  addTrack(trackData:FormData):Observable<any>{
    return this.http.post(`${this.base_url}/add-track`,trackData)
  }
}
