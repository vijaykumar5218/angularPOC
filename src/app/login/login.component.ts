import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails=new FormGroup({
    emailId:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('')
  });
  constructor(private loginService:LoginService) {
    console.log('Created LoginComponenet....')
   }

  ngOnInit() {
  }
 

  onLoginClick(){
    console.log('invoked  onLoginClick....');
    this.loginService.fetchByCategory(this.loginDetails);

  }

  onCancelClick(){
    console.log('login cancle button click...');
  }

}
