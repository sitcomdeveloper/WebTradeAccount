import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  constructor(private service: ServicesService, private fb: FormBuilder) { }
  beforelogin = true;
  afterlogin = false;
  ngOnInit(): void {
   

    this.loginForm = this.fb.group({
      clientid: [''],
      pwd: ['']
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
      console.log('userwilllogin',loginRes);
      window.sessionStorage.setItem('project', JSON.stringify(loginRes));
        console.log('stringifydata', JSON.stringify(loginRes));
        // localStorage.setItem('uid', this.UserName);
      } else {
        alert('Invalid Credential');
      }
    },
    // err => {
    //   alert('Error');
    // }
    );
    
     // code for receiving login details and bind to header at place of name
     this.getLoginDetails = JSON.parse(window.sessionStorage.getItem('project'));
     this.bindLoginData = this.getLoginDetails;
     console.log('LD',this.bindLoginData);
     this.beforelogin = false;
    this.afterlogin = true;
  }
  logoutfromtrade() {
    window.sessionStorage.clear();
    this.beforelogin = true;
    this.afterlogin = false;
  }
}
