import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup
  userwilllogin: any;
  getLoginDetails: any;
  bindLoginData: any;
  getCredentials: any;
  response: any;
  constructor(private service: ServicesService, private fb: FormBuilder, private router: Router) { }
  beforelogin = true;
  afterlogin = false;
  ngOnInit(): void {
    if (localStorage.getItem('project')) {
      this.beforelogin = false;
      this.afterlogin = true;
    }
    // this.getLoginDetails = JSON.parse(localStorage.getItem('project'));
    // this.bindLoginData = this.getLoginDetails;
    this.loginForm = this.fb.group({
      clientid: [''],
      pwd: [''],
      email: ['']
    })
  }
  loginfortrade() {
    const clntloginParamtr = {
      ClientId: this.loginForm.value.clientid,
      Password: this.loginForm.value.pwd
    }
    this.service.clientLogin(clntloginParamtr).subscribe(loginRes => {
      if (loginRes) {
        // this.router.navigateByUrl('clients');
        this.userwilllogin = loginRes;
        console.log('userwilllogin', loginRes);
        localStorage.setItem('project', JSON.stringify(loginRes));
        console.log('stringifydata', JSON.stringify(loginRes));
        this.beforelogin = false;
        this.afterlogin = true;
      } else {
        alert('Invalid Credential');
      }
    },
      err => {
        alert('Error');
      }
    );
  }
  logoutfromtrade() {
    
    localStorage.clear();
    
    this.beforelogin = true;
    this.afterlogin = false;
    // if(this.router.navigateByUrl('/home')) {
    //   window.location.reload();
    
    // }
  }
  // reset password
  restepwd() {
    const frgt = this.loginForm.value.email;
    this.service.forgotpwd(frgt).subscribe(resetpwdres => {
      this.getCredentials = resetpwdres;
      if (resetpwdres === 'Success') {
        this.response = 'Credentials is sent on your mail'
      } else {
        this.response = 'Invalid Client'
      }
      // console.log('getCredentials',resetpwdres);
    })
  }
  // home icon
  // movetohome() {
  //   if(this.router.navigateByUrl("/home")) {
  //   window.location.reload();
  //   }
  // }
}
