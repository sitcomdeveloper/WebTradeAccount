import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginsection = true;
  afterlogin = true;
  constructor() { }

  ngOnInit(): void {
  }
  // Onlogin() {
  //   this.loginsection = false;
  //   this.afterlogin = true;
  // }
}
