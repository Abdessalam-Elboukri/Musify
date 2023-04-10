import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";
import {ActivatedRoute} from "@angular/router";
import {PrimaryNavbarComponent} from "../../navbars/primary-navbar/primary-navbar.component";
import {AudioService} from "../../../services/audio.service";
import {CloudService} from "../../../services/cloud.service";

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent extends PrimaryNavbarComponent implements OnInit {

  songs:any
  albumRef:string
  data:any
  url:string

  constructor(audioService: AudioService,
              cloudService: CloudService,
              public activatedRoute:ActivatedRoute,
              public albumService:AlbumService) {
    super(audioService, cloudService);
  }

  override ngOnInit(): void {
    this.albumRef=this.activatedRoute.snapshot.params['ref']
    this.getAlbum()
  }

  getAlbum(){
    this.albumService.getAlbumByRef(this.albumRef).subscribe((res)=>{
      console.log(res)
      this.data=res.data
      this.songs=res.data.trackList
      this.url=`background-image:url(${this.data.albumAvatar})`
    })
  }

}
