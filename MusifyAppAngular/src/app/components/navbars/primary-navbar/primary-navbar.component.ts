import { Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router'
import {AudioService} from "../../../services/audio.service";
import {CloudService} from "../../../services/cloud.service";
import {StreamState} from "../../../interfaces/stream-state";

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['primary-navbar.component.css']
})
export class PrimaryNavbarComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState | undefined;
  currentFile: any = {};
  stateInitialize=0
  stepPlay=1
  constructor(public audioService: AudioService,
              public cloudService: CloudService
  ) {
    // get media files
    cloudService.getFiles().subscribe(files => {
      this.files = files;
    });



    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit(): void {
   //  this.playStream("https://www.thinknews.com.ng/wp-content/uploads/2021/10/Adele_-_Easy_On_Me_(thinknews.com.ng).mp3")
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change: { value: number; }) {
    this.audioService.seekTo(change.value);
  }

  onVolumeChange(volume: { value: number; }){
    this.audioService.setVolume(volume.value);
  }

  playStream(url: any) {
    this.audioService.playStream(url).subscribe( (events: any) => {
      // listening for fun here
      // console.log(events);
      if(events.type == 'ended'){
        if(!this.isLastPlaying()){
          this.next();
        }else{
          this.openFile(this.files[0], 0);
        }
      }
    });
  }

  openFile(file: { trackUrl: any}, index: number) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.trackUrl);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.openFile(this.files[0], 0);
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }
  isPlaying(){
    return this.state.playing == true;
  }

}
