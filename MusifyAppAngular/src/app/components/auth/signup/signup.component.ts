import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {UserApp} from "../../../models/user";
import {CountriesService} from "../../../services/countries.service";
import {Countries} from "../../../models/countries";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  countries:any;
  user:UserApp = new UserApp();
  country:Countries
  ss:String
  constructor(private authService:AuthService,
              private router:Router,
              private countryService:CountriesService
              ) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((e)=>{
      this.countries=e.data;
      console.log(this.countries)
    })
  }


  userRegister(form:NgForm){
    this.country=new Countries(JSON.stringify(this.user.country).replace(/"/gi,""));
    console.log(this.country)
    console.log(this.user)
    this.user.country=this.country
    this.authService.signup(this.user).subscribe((res)=>{
      this.router.navigate(["login"])
    })
  }

}
