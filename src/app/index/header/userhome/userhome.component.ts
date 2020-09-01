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

  trdinghistry = false;
  uplddocuments = false;
  mnetrytransction = false;
  withdrwl = false;
  constructor() { }

  ngOnInit(): void {
  }
  userhome() {
this.home = true;
this.personalddetails = false;
this.chngpwd = false;
this.cntctus = false;
this.trdinghistry = false;
this.uplddocuments = false;
this.mnetrytransction = false;
this.withdrwl = false;
  }
  prsnldtls() {
    this.home = false;
this.personalddetails = true;
this.chngpwd = false;
this.cntctus = false;
this.trdinghistry = false;
this.uplddocuments = false;
this.mnetrytransction = false;
this.withdrwl = false;
  }
  chngepassword() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = true;
    this.cntctus = false;
    this.trdinghistry = false;
this.uplddocuments = false;
this.mnetrytransction = false;
this.withdrwl = false;
  }
  contactwe() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = true;
    this.trdinghistry = false;
this.uplddocuments = false;
this.mnetrytransction = false;
this.withdrwl = false;
  }
  tradinghistory() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = false;
    this.trdinghistry = true;
this.uplddocuments = false;
this.mnetrytransction = false;
this.withdrwl = false;
  }
  depositfunds() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = true;
    this.trdinghistry = false;
this.uplddocuments = false;
this.mnetrytransction = false;
this.withdrwl = false;
  }
  uploaddocuments() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = false;
    this.trdinghistry = false;
this.uplddocuments = true;
this.mnetrytransction = false;
this.withdrwl = false;
  }
  monetarytransactions() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = false;
    this.trdinghistry = false;
this.uplddocuments = false;
this.mnetrytransction = true;
this.withdrwl = false;
  }
  withdrawl() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = false;
    this.trdinghistry = false;
this.uplddocuments = false;
this.mnetrytransction = false;
this.withdrwl = true;
  }
}
