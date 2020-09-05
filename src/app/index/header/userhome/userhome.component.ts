import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

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
  getLoginDetails: any;
  bindLoginData: any;
  updatedetails: any;
  constructor(private fb: FormBuilder, private service: ServicesService) { }

  ngOnInit(): void {
    // code for receiving login details
    this.getLoginDetails = JSON.parse(window.sessionStorage.getItem('project'));
    this.bindLoginData = this.getLoginDetails;

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
  }
  // fund account
  addfund() {
    const fndaccntparamtr = {
      TPAccountNumber: this.UserFormInfo.value.trdeaccount,
      DepositAmount: this.UserFormInfo.value.amount,
    }
    this.service.fundAccount(fndaccntparamtr).subscribe(giveFund => {
      this.fundtheAccount = giveFund;
      if(giveFund === null) {
        this.response = 'Amount is added successfully..!'
      } else {
        this.response = '';
      }
      this.UserFormInfo.reset();
      console.log('fundtheAccount', giveFund);
    })
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
      Id: this.bindLoginData.Client.Id,
      Email: this.bindLoginData.Client.Email,
      OldPassword: this.UserFormInfo.value.oldpwd,
      NewPassword: this.UserFormInfo.value.newpwd,
      ConfirmPassword: this.UserFormInfo.value.confirmpwd,
    }
    this.service.changePassword(chngepwdparamtr).subscribe(updtpwdbyeml => {
      this.updatedpasswrd = updtpwdbyeml;
      if (updtpwdbyeml === null) {
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
      OwnerId: this.bindLoginData.Client.OwnerId,
      FirstName: this.UserFormInfo.value.firstname,
      LastName: this.UserFormInfo.value.lastname,
      Email: this.UserFormInfo.value.email,
      Phone: this.UserFormInfo.value.phonenumber,
      CountryId: '',
      CountryName: this.UserFormInfo.value.countryname,
      Subject: this.UserFormInfo.value.subject,
      Message: this.UserFormInfo.value.message,
    }
    this.service.contactUs(contctusParamtr).subscribe(contctusforquery => {
      this.usercontactus = contctusforquery;
      if(contctusforquery === null) {
        this.response = '';
      } else {
        this.response = "Thank you for reaching us. Our team will contact you..!"
      }
      this.UserFormInfo.reset();
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
    this.service.fetchpersonaldetails(this.bindLoginData.Client.Email).subscribe(dtlsoffetchuser => {
      this.detailsonEmail = dtlsoffetchuser;
    })
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
    this.service.fetchpersonaldetails(this.bindLoginData.Client.Email).subscribe(dtlsoffetchuser => {
      this.detailsonEmail = dtlsoffetchuser;
      this.UserFormInfo.patchValue({
        firstname: this.detailsonEmail.FirstName,
        lastname: this.detailsonEmail.LastName,
        countryname: this.detailsonEmail.CountryName,
        email: this.detailsonEmail.Email,
        phonecode: 91,
        phonenumber: this.detailsonEmail.Phone,
        state: this.detailsonEmail.State,
        city: this.detailsonEmail.City,
        postcode: this.detailsonEmail.PinCode,
      });
      console.log('detailsonEmail', dtlsoffetchuser);
    })
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
  // edit button
  // fetch personal details
  closenormalmode() {
    this.service.fetchpersonaldetails(this.bindLoginData.Client.Email).subscribe(dtlsoffetchuser => {
      this.detailsonEmail = dtlsoffetchuser;
      this.UserFormInfo.patchValue({
        firstname: this.detailsonEmail.FirstName,
        lastname: this.detailsonEmail.LastName,
        countryname: this.detailsonEmail.CountryName,
        email: this.detailsonEmail.Email,
        phonecode: 91,
        phonenumber: this.detailsonEmail.Phone,
        state: this.detailsonEmail.State,
        city: this.detailsonEmail.City,
        postcode: this.detailsonEmail.PinCode,
      });
      console.log('detailsonEmail', dtlsoffetchuser);
    })
    this.personalddetails = false;
    this.editpersonaldetails = true;
  }
  // getpersonaldetails for after update
  afterupdate() {
    this.service.fetchpersonaldetails(this.bindLoginData.Client.Email).subscribe(dtlsoffetchuser => {
      this.detailsonEmail = dtlsoffetchuser;
    })
  }
  savepersonaldetails() {
    this.service.fetchpersonaldetails(this.bindLoginData.Client.Email).subscribe(dtlsoffetchuser => {
      this.detailsonEmail = dtlsoffetchuser;
    })
    const updtprsnldetls = {
      Id: this.detailsonEmail.Id,
      FirstName: this.UserFormInfo.value.firstname,
      LastName: this.UserFormInfo.value.lastname,
      CountryId: '',
      CountryName: this.UserFormInfo.value.countryname,
      Email: this.UserFormInfo.value.email,
      Phone: this.UserFormInfo.value.phonenumber,
      OwnerId: this.detailsonEmail.OwnerId,
      Mobile: '',
      State: this.UserFormInfo.value.state,
      City: this.UserFormInfo.value.city,
      PinCode: this.UserFormInfo.value.postcode,
    }
    this.service.updatepersonaldetails(updtprsnldetls).subscribe(persnldtlsupdt => {
      this.updatedetails = persnldtlsupdt;
      this.service.fetchpersonaldetails(this.bindLoginData.Client.Email).subscribe(dtlsoffetchuser => {
        this.detailsonEmail = dtlsoffetchuser;
      })
      console.log('updatedetails', persnldtlsupdt);
    })
    this.editpersonaldetails = false;
    
    this.personalddetails = true;
  }
  backtopersonaldetails() {
    this.personalddetails = true;
    this.editpersonaldetails = false;
  }
  // 
}
