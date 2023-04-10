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
import {CreateAlbumComponent} from "./components/album/create-album/create-album.component";
import {AuthGuard} from "./components/auth/guard.guard";
import {GuardRoleGuard} from "./components/auth/guard-role.guard";
import {ProfileComponent} from "./components/user/profile/profile.component";

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},

  {path : '',
    component : PrimaryLayoutComponent,
    children:[
      {path:"" , component:HomeComponent},
      {path:"all-albums" , component:ListAlbumsComponent},
      {path:"album/:ref" , component:SingleAlbumComponent},
      {path:"all-artists" , component:ListArtistsComponent},
      {path:"profile", component: ProfileComponent}


    ]
  },
  {path : '',
    component : DashLayoutComponent,
    children:[
      {path:"all-users" , component:ListUsersComponent},
    ]
  },
  {path : '',
    component : DashLayoutComponent, canActivate:[AuthGuard, GuardRoleGuard],data:{role:'artist'},
    children:[
      {path: "add-album", component:CreateAlbumComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
