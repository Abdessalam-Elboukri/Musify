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
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TrackRowComponent } from './components/cards/track-row/track-row.component';
import { AlbumCardComponent } from './components/cards/album-card/album-card.component';
import { SingleAlbumComponent } from './components/album/single-album/single-album.component';
import { CreateAlbumComponent } from './components/album/create-album/create-album.component';
import {RecentPlayComponent} from "./components/track/recent-play/recent-play.component";
import { AddAlbumModalComponent } from './components/modals/add-album-modal/add-album-modal.component';
import { AddTrackModalComponent } from './components/modals/add-track-modal/add-track-modal.component';
import {AuthInterceptor} from "./components/auth/interceptor.interceptor";
import { ProfileComponent } from './components/user/profile/profile.component';
import { ArtistSidebarComponent } from './components/sidebars/artist-sidebar/artist-sidebar.component';
import { InfiniteScrollPagiComponent } from './components/infinite-scroll-pagi/infinite-scroll-pagi.component';
import { MatTableModule } from '@angular/material';



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
    ListAlbumsComponent,
    ListUsersComponent,
    TrackRowComponent,
    AlbumCardComponent,
    SingleAlbumComponent,
    CreateAlbumComponent,
    RecentPlayComponent,
    AddAlbumModalComponent,
    AddTrackModalComponent,
    ProfileComponent,
    ArtistSidebarComponent,
    InfiniteScrollPagiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
