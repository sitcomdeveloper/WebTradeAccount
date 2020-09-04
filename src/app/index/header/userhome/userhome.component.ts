import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { ThrowStmt } from '@angular/compiler';

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

  dpsitfunds = false;
  trdinghistry = false;
  uplddocuments = false;
  mnetrytransction = false;
  withdrwl = false;
  UserFormInfo: FormGroup
  detailsonEmail: any;
  updateddetailsofuser: any;
  updatedpasswrd: any;
  response: string;
  usercontactus: any;
  fundtheAccount: any;
  editpersonaldetails = false;
  constructor(private fb: FormBuilder, private service: ServicesService) { }

  ngOnInit(): void {
    this.UserFormInfo = this.fb.group({
      // contact us
      firstname: [''],
      lastname: [''],
      countryname: [''],
      email: [''],
      phonecode: [''],
      phonenumber: [''],
      subject: [''],
      message: [''],
      // persnl details
      state: [''],
      city: [''],
      postcode: [''],
      // deposit funds
      trdeaccount: [''],
      amount: [''],
      // chngepwd
      oldpwd: [''],
      newpwd: [''],
      confirmpwd: [''],
    })
    this.getdetailsofUser();
  }
  // fund account
  addfund() {
    const fndaccntparamtr = {
      TPAccountNumber: this.UserFormInfo.value.trdeaccount,
      DepositAmount: this.UserFormInfo.value.amount,
    }
    this.service.fundAccount(fndaccntparamtr).subscribe(giveFund => {
      this.fundtheAccount = giveFund;
      console.log('fundtheAccount',giveFund);
    })
  }
  // fetch personal details
  getdetailsofUser() {
    // this.service.fetchpersonaldetails().subscribe(dtlsoffetchuser => {
    //   this.detailsonEmail = dtlsoffetchuser;
    //   console.log('detailsonEmail',dtlsoffetchuser);
    // })
  }
  // update details
  updatedetailsforemailUser() {
    // const updtprsnldetls = {}
    // this.service.updatepersonaldetails(updtprsnldetls).subscribe(updateddetails => {
    //   this.updateddetailsofuser = updateddetails;
    //   console.log('updateddetailsofuser',updateddetails);
    // })
  }
  // update password
  updatethepassword() {
    const chngepwdparamtr = {
      Id: 1,
      Email: 1,
      OldPassword: this.UserFormInfo.value.oldpwd,
      NewPassword: this.UserFormInfo.value.newpwd,
      ConfirmPassword: this.UserFormInfo.value.confirmpwd,
    }
    this.service.changePassword(chngepwdparamtr).subscribe(updtpwdbyeml => {
      this.updatedpasswrd = updtpwdbyeml;
      if (updtpwdbyeml === 'null') {
        this.response = 'Password is updated successfully..!';
      } else {
        this.response = '';
      }
      this.UserFormInfo.reset();
      console.log('updatedpasswrd', updtpwdbyeml);
    })
  }
  // contact us
  fillcontactusform() {
    const contctusParamtr = {
      OwnerId: 1,
       FirstName: this.UserFormInfo.value.firstname,
       LastName: this.UserFormInfo.value.lastname,
       Email: this.UserFormInfo.value.email,
       Phone: this.UserFormInfo.value.phonecode + this.UserFormInfo.value.phonenumber, 
      CountryId: '', 
       CountryName: this.UserFormInfo.value.countryname,
       Subject: this.UserFormInfo.value.subject,
       Message: this.UserFormInfo.value.message,
    }
    this.service.contactUs(contctusParamtr).subscribe(contctusforquery => {
      this.usercontactus = contctusforquery;
      console.log('usercontactus', contctusforquery);
    })
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
  }
  depositfunds() {
    this.home = false;
    this.personalddetails = false;
    this.chngpwd = false;
    this.cntctus = false;
    this.trdinghistry = false;
    this.uplddocuments = false;
    this.mnetrytransction = false;
    this.withdrwl = false;
    this.dpsitfunds = true;
    this.editpersonaldetails = false;
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
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
    this.dpsitfunds = false;
    this.editpersonaldetails = false;
  }
  // personal details editing div
  closenormalmode() {
    this.personalddetails = false;
    this.editpersonaldetails = true;
  }
  savepersonaldetails() {
    this.personalddetails = true;
    this.editpersonaldetails = false;
  }
  backtopersonaldetails() {
    this.personalddetails = true;
    this.editpersonaldetails = false;
  }
  // 
}
