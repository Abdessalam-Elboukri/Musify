import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../../models/album";
import {AlbumService} from "../../../services/album.service";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";
import {FileHandler} from "../../../interfaces/file-handler";
import {NgForm} from "@angular/forms";
import {Track} from "../../../models/track";
import {TrackService} from "../../../services/track.service";

@Component({
  selector: 'app-add-track-modal',
  templateUrl: './add-track-modal.component.html',
  styleUrls: ['./add-track-modal.component.css']
})
export class AddTrackModalComponent implements OnInit {


  track:Track=new Track();
  albumRef:string
  constructor(private trackService:TrackService,
              private storageService:StorageService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onFileChanged(event:any) {
    if(event.target.files){
      const file = event.target.files[0];
      const fileHandler : FileHandler ={
        file : file
      }
      this.track.trackFile=fileHandler;
      this.track.trackImage=fileHandler
    }
  }

  getAlbumRef(ref:string){
    this.albumRef=ref
  }

  prepareFormData(track:Track): FormData{
    const formData = new FormData();

    formData.append('track',
      new Blob([JSON.stringify(track)],{type:'application/json'}));

    formData.append('trackImage',
      track.trackImage?.file,
      track.trackImage.file.name);

    formData.append('trackFile',
      track.trackFile?.file,
      track.trackFile.file.name);

    formData.append('albumRef',
      this.albumRef
    )
    return formData;
  }

  addTrack(form:NgForm){
    console.log(this.track)
    console.log(this.albumRef)
    console.log("starting upload image ...")
    const trackFormData=this.prepareFormData(this.track);
    this.trackService.addTrack(trackFormData).subscribe((res)=>{
      console.log(res)
      this.router.navigate(["/add-album"])
    })
  }


  private _stateName="";
  @Input()
  get stateName(): string{
    return this._stateName;
  }
  set stateName(stateName:string){
    this._stateName = stateName === undefined ? "" : stateName;
  }

}
