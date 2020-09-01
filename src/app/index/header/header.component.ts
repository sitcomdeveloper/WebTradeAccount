import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  beforelogin = true;
  afterlogin = false;
  ngOnInit(): void {
  }
  loginfortrade() {
    this.beforelogin = false;
    this.afterlogin = true;
  }
  logoutfromtrade() {
    this.beforelogin = true;
    this.afterlogin = false;
  }
}
