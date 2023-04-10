import { Component, OnInit } from '@angular/core';
import {PrimaryNavbarComponent} from "../../navbars/primary-navbar/primary-navbar.component";
import {AudioService} from "../../../services/audio.service";
import {CloudService} from "../../../services/cloud.service";

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent extends PrimaryNavbarComponent implements OnInit {

  public override audioService: AudioService;

  public override cloudService: CloudService;

  constructor(audioService: AudioService,
              cloudService: CloudService) {
    super(audioService,cloudService);
    this.cloudService = cloudService;
    this.audioService = audioService;
  }

  override ngOnInit(): void {
  }

}
