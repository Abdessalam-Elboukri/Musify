import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimarySidebarComponent } from './components/sidebars/primary-sidebar/primary-sidebar.component';
import { PrimaryLayoutComponent } from './layouts/primary-layout/primary-layout.component';
import { HomeComponent } from './components/home/home.component';
import { RightSidebarComponent } from './components/sidebars/right-sidebar/right-sidebar.component';
import { PrimaryNavbarComponent } from './components/navbars/primary-navbar/primary-navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SearchComponent } from './components/search/search.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSliderModule} from "@angular/material/slider";
import {TrackCardComponent} from "./components/cards/track-card/track-card.component";
import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';
import { ListArtistsComponent } from './components/artist/list-artists/list-artists.component';
import { ListAlbumsComponent } from './components/album/list-albums/list-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimarySidebarComponent,
    PrimaryLayoutComponent,
    HomeComponent,
    RightSidebarComponent,
    PrimaryNavbarComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    TrackCardComponent,
    DashLayoutComponent,
    ListArtistsComponent,
    ListAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
