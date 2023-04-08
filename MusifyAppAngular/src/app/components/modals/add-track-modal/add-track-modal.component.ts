import { Component, OnInit } from '@angular/core';
import {Album} from "../../../models/album";
import {AlbumService} from "../../../services/album.service";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";
import {FileHandler} from "../../../interfaces/file-handler";
import {NgForm} from "@angular/forms";
import {Track} from "../../../models/track";

@Component({
  selector: 'app-add-track-modal',
  templateUrl: './add-track-modal.component.html',
  styleUrls: ['./add-track-modal.component.css']
})
export class AddTrackModalComponent implements OnInit {


  track:Track=new Track();
  email:string;
  constructor(private trackService:AlbumService,
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
      this.track.trackFile=fileHandler;
    }
  }

  prepareFormData(track:Track): FormData{
    const formData = new FormData();

    formData.append('album',
      new Blob([JSON.stringify(track)],{type:'application/json'}));

    formData.append('TrackImage',
      track.trackImage.file,
      track.trackImage.file.name);

    formData.append('TrackFile',
      track.trackFile.file,
      track.trackFile.file.name);

    formData.append('email',
      this.email
    )
    return formData;
  }

  addTrack(form:NgForm){
    console.log("starting upload image ...")
    const albumFormData=this.prepareFormData(this.track);
    console.log(albumFormData);
    this.trackService.addAlbum(albumFormData).subscribe((res)=>{
      this.router.navigate([""])
    })
  }

}
