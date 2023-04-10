import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";
import {StorageService} from "../../../services/storage.service";
import {TrackService} from "../../../services/track.service";

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  email:string
  albums:any
  tracksByAlbums:any
  trackRef:string
  trackName:string
  constructor(private albumService:AlbumService,
              private storageService:StorageService,
              private trackService:TrackService) { }

  ngOnInit(): void {
    this.email=this.storageService.getUser().sub
    console.log(this.email)
    this.getAlbumsByArtist()
  }

  getAlbumsByArtist(){
    this.albumService.getAlbumsByArtist(this.email).subscribe((res)=>{
      console.log(res);
      this.albums=res.data
      console.log(res.data[0].trackList[0].trackUrl);
    })
  }

  getTracksByAlbum(ref:string){
    this.trackService.getTracksByAlbums(ref).subscribe((res)=>{
      console.log(res.data)
      this.tracksByAlbums=res.data
      this.trackRef=ref
    })
  }

  getAlbumName(trackName:string){
    this.trackName=trackName;
  }

}
