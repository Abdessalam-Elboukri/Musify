import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email:string
  userData:any
  constructor(private userService:UserService,
              private storageService:StorageService,
              private router:Router) { }

  ngOnInit(): void {
    this.email=this.storageService.getUser().sub;
    this.getUserProfile()
  }

  getUserProfile(){
    this.userService.getOne(this.email).subscribe((res)=>{
      this.userData=res.data
      console.log(res)
    })
  }

  logout(){
    this.storageService.clean()
    this.router.navigate(['/login'])
  }

}
