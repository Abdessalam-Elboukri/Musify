import { Component, OnInit} from '@angular/core';

declare var $: any;
import {PrimaryNavbarComponent} from "../navbars/primary-navbar/primary-navbar.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends PrimaryNavbarComponent implements OnInit {




  override ngOnInit(): void {

  }







}
