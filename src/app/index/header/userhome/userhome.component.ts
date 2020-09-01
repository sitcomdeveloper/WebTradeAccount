import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  home = true;
  personalddetails = false;
  chngpwd = false;
  cntctus = false;
  constructor() { }

  ngOnInit(): void {
  }
  userhome() {
this.home = true;
this.personalddetails = false;
this.chngpwd = false;
this.cntctus = false;
  }
  prsnldtls() {
    this.home = false;
this.personalddetails = true;
this.chngpwd = false;
this.cntctus = false;
  }
  chngepassword() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = true;
    this.cntctus = false;
  }
  contactwe() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = true;
  }
}
