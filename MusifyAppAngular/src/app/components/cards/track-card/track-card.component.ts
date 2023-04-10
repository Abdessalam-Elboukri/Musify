import {Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input} from '@angular/core';
import {CloudService} from "../../../services/cloud.service";

declare var $: any;

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent implements OnInit {

  data:any
    constructor(private cloudService: CloudService) {
    }

    ngOnInit(): void {

    }


  private _stateName="";
  @Input()
  get stateName(): string{
    return this._stateName;
  }
  set stateName(stateName:string){
    this._stateName = stateName === undefined ? "" : stateName;
  }


  private _stateArtist="";
  @Input()
  get stateArtist(): string{
    return this._stateArtist;
  }
  set stateArtist(stateArtist:string){
    this._stateArtist = stateArtist === undefined ? "" : stateArtist;
  }

}
