import {Component, OnInit} from '@angular/core';
import {Track} from "../../../models/track";

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css']
})
export class AddTrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  track:Track;
  email:string;

  onFileChanged(event:any) {
    if(event.target.files){
      const file = event.target.files[0];
      this.track.trackUrl={
        file: file
      };
    }
  }

  prepareFormData(track:Track): FormData{
    const formData = new FormData();

    formData.append('hotel',
      new Blob([JSON.stringify(track)],{type:'application/json'}));

    formData.append('MyFile',
      track.trackUrl.file,
      track.trackUrl.file.name);

    formData.append('user',
      this.email
    )
    return formData;

  }


}
