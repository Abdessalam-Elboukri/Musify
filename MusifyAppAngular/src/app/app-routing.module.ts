import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrimaryLayoutComponent} from "./layouts/primary-layout/primary-layout.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {ListAlbumsComponent} from "./components/album/list-albums/list-albums.component";
import {ListArtistsComponent} from "./components/artist/list-artists/list-artists.component";
import {DashLayoutComponent} from "./layouts/dash-layout/dash-layout.component";
import {ListUsersComponent} from "./components/user/list-users/list-users.component";
import {SingleAlbumComponent} from "./components/album/single-album/single-album.component";
import {AddTrackComponent} from "./components/track/add-track/add-track.component";
import {CreateAlbumComponent} from "./components/album/create-album/create-album.component";

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},

  {path : '',
    component : PrimaryLayoutComponent,
    children:[
      {path: 'play',component: CreateAlbumComponent},
      {path:"" , component:HomeComponent},
      {path:"all-albums" , component:ListAlbumsComponent},
      {path:"albumid" , component:SingleAlbumComponent},
      {path:"all-artists" , component:ListArtistsComponent},


    ]
  },
  {path : '',
    component : DashLayoutComponent,
    children:[
      {path:"all-users" , component:ListUsersComponent},
      {path: "add-track", component: AddTrackComponent}
    ]
  },
  {path : '',
    component : DashLayoutComponent,
    children:[
      {path: "add-track", component: AddTrackComponent},
      {path: "add-album", component:CreateAlbumComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
