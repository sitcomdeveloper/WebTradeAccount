import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userwilllogin: any;
  constructor(private service: ServicesService) { }
  beforelogin = true;
  afterlogin = false;
  ngOnInit(): void {
  }
  loginfortrade() {
    this.beforelogin = false;
    this.afterlogin = true;
    // this.service.clientLogin.subscribe(loginRes => {
    //   this.userwilllogin = loginRes;
    //   console.log('userwilllogin',loginRes);
    // })
  }
  logoutfromtrade() {
    this.beforelogin = true;
    this.afterlogin = false;
  }
}
