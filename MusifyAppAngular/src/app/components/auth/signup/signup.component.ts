import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {UserApp} from "../../../models/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:UserApp = new UserApp();
  constructor(private authService:AuthService,
              private router:Router,
              ) { }

  ngOnInit(): void {
  }


  userRegister(form:NgForm){
    this.authService.signup(this.user).subscribe((res)=>{
      this.router.navigate(["login"])
    })
  }

}
