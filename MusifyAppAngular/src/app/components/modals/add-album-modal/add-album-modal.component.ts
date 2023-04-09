import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlbumService} from "../../../services/album.service";
import {FileHandler} from "../../../interfaces/file-handler";
import {Album} from "../../../models/album";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-album-modal',
  templateUrl: './add-album-modal.component.html',
  styleUrls: ['./add-album-modal.component.css']
})
export class AddAlbumModalComponent implements OnInit {

  album:Album=new Album();
  email:string;
  constructor(private albumService:AlbumService,
              private storageService:StorageService,
              private router:Router) { }

  ngOnInit(): void {
    this.email=this.storageService.getUser()
    console.log(this.email)
  }

  onFileChanged(event:any) {
    if(event.target.files){
      const file = event.target.files[0];
      const fileHandler : FileHandler ={
        file : file
      }
      this.album.albumImage=fileHandler;
    }
  }

  prepareFormData(album:Album): FormData{
    const formData = new FormData();

    formData.append('album',
      new Blob([JSON.stringify(album)],{type:'application/json'}));

    formData.append('MyFile',
      album.albumImage?.file,
      album.albumImage.file.name);

    formData.append('email',
      this.email
    )
    return formData;
  }

  addAlbum(form:NgForm){
      console.log("starting upload image ...")
      const albumFormData=this.prepareFormData(this.album);
      console.log(albumFormData);
      this.albumService.addAlbum(albumFormData).subscribe((res)=>{
        console.log(res)
        this.router.navigate(["add-album"])
      })
  }

}
