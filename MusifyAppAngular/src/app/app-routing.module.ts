import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrimaryLayoutComponent} from "./layouts/primary-layout/primary-layout.component";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {SignupComponent} from "./components/auth/signup/signup.component";
import {ListAlbumsComponent} from "./components/album/list-albums/list-albums.component";
import {ListArtistsComponent} from "./components/artist/list-artists/list-artists.component";

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path : '',
    component : PrimaryLayoutComponent,
    children:[
      {path:"" , component:HomeComponent},
      {path:"all-albums" , component:ListAlbumsComponent},
      {path:"all-artists" , component:ListArtistsComponent},



    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
