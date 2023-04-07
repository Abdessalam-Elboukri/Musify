import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Login} from "../../../models/login";
import {UserService} from "../../../services/user.service";
import {StorageService} from "../../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login =new Login();
  message:string;

  constructor( private authService:AuthService,
                private userService :UserService,
               private storageService:StorageService,
               private router:Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    this.authService.login(this.login).subscribe((res:any)=> {
      const user = this.userService.getOne(this.login.email).subscribe((result) => {
        this.storageService.saveUser(res);
        this.message=res.message;
        console.log(this.message)
        this.router.navigate(["/"]);
      });

    })

  }


}
