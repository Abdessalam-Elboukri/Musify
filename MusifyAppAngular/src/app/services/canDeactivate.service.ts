import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, CanDeactivate} from '@angular/router';
import {PrimaryNavbarComponent} from "../components/navbars/primary-navbar/primary-navbar.component";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateMusicPlayerGuard implements CanDeactivate<PrimaryNavbarComponent> {
  constructor(private musicPlayerService: PrimaryNavbarComponent) {}

  canDeactivate(component: PrimaryNavbarComponent) {
    if (this.musicPlayerService.isPlaying()) {
      return confirm('Are you sure you want to leave the music player?');
    }
    return true;
  }
}
