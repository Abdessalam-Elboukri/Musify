import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  private _statId="";
  @Input()
  get statId(): string{
    return this._statId;
  }
  set statId(statId:string){
    this._statId = statId === undefined ? "" : statId;
  }

  private _statRef="";
  @Input()
  get statRef(): string{
    return this._statRef;
  }
  set statRef(statRef:string){
    this._statRef = statRef === undefined ? "" : statRef;
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
