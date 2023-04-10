import { Component, OnInit} from '@angular/core';

declare var $: any;
import {PrimaryNavbarComponent} from "../navbars/primary-navbar/primary-navbar.component";
import {AudioService} from "../../services/audio.service";
import {CloudService} from "../../services/cloud.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PrimaryNavbarComponent implements OnInit {


  songs:any
  constructor(audioService: AudioService, cloudService: CloudService) {
    super(audioService, cloudService);
  }

  override ngOnInit(): void {
    this.songs=this.cloudService.files
  }







}
