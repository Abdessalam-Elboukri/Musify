import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent implements OnInit {

  songs:any
  albumRef:string
  data:any
  files:any
  constructor(private albumService:AlbumService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.albumRef=this.activatedRoute.snapshot.params['ref']
    this.getAlbum()


  }

  getAlbum(){
    this.albumService.getAlbumByRef(this.albumRef).subscribe((res)=>{
      console.log(res)
      this.data=res.data
      this.files=res.data.trackList
    })
  }

}
