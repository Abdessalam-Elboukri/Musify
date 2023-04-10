import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-track-row',
  templateUrl: './track-row.component.html',
  styleUrls: ['./track-row.component.css']
})
export class TrackRowComponent implements OnInit {

  constructor() { }

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

}
