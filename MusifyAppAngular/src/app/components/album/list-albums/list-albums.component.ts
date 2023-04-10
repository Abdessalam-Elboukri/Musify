import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../../services/album.service";

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {

  albums:any
  constructor(private albumService:AlbumService) { }

  ngOnInit(): void {
    this.getAllAlbums()
  }

  getAllAlbums(){
    this.albumService.getAll().subscribe((res)=>{
      console.log(res)
      this.albums=res.data.page.content
    })
  }

}
