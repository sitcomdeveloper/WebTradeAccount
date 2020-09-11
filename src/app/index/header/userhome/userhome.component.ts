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
  allMonetartTrans: any;
  debitAmount: any;
  typesofdocuments: any;
  confidentialdocumnts: any;
  uploadedFile: File;
  respons: string;
  respon: string;
  respo: string;
  resp: string;
  respond: string;
  allCountries: any;
  countryPhoneCode: any;
  constructor(private fb: FormBuilder, private service: ServicesService) { }

  ngOnInit(): void {
    // code for receiving login details
    this.getLoginDetails = JSON.parse(localStorage.getItem('project'));
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
      countryid: [''],
      // deposit funds
      trdeaccount: [''],
      amount: [''],
      // chngepwd
      oldpwd: [''],
      newpwd: [''],
      confirmpwd: [''],
      // withdwl
      tpaccountnumber: [''],
      bankname: [''],
      iban: [''],
      // upload document
      documenttype: [''],
      document: ['']
    })
    this.typeofdocument();
    this.getallCountry();
  }
  // fund account
  addfund() {
    const fndaccntparamtr = {
      TPAccountNumber: this.UserFormInfo.value.trdeaccount,
      DepositAmount: this.UserFormInfo.value.amount,
    }
    this.service.fundAccount(fndaccntparamtr).subscribe(giveFund => {
      this.fundtheAccount = giveFund;
      if (giveFund === null) {
        this.respons = 'Amount is added successfully..!'
      } else {
        this.respons = '';
      }
      this.UserFormInfo.reset();
      // console.log('fundtheAccount', giveFund);
    })
  }
  // update password
  updatethepassword() {
    const chngepwdparamtr = {
      Id: this.bindLoginData?.Client.Id,
      Email: this.bindLoginData?.Client.Email,
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
      // console.log('updatedpasswrd', updtpwdbyeml);
    })
  }
  // contact us
  fillcontactusform() {
    const contctusParamtr = {
      OwnerId: this.bindLoginData?.Client.OwnerId,
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
      if (contctusforquery === null) {
        this.resp = '';
      } else {
        this.resp = "Thank you for reaching us. Our team will contact you..!"
      }
      this.UserFormInfo.reset();
      // console.log('usercontactus', contctusforquery);
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
    this.service.fetchpersonaldetails(this.bindLoginData?.Client.Email).subscribe(dtlsoffetchuser => {
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
    // personal details editing div
  // edit button
  // fetch personal details
  closenormalmode() {
    this.service.fetchpersonaldetails(this.bindLoginData?.Client.Email).subscribe(dtlsoffetchuser => {
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
      // console.log('detailsonEmail', dtlsoffetchuser);
    })
    this.personalddetails = false;
    this.editpersonaldetails = true;
  }
  
  savepersonaldetails() {
    this.allCountries.forEach(element => {
      if ( element.Id === +this.UserFormInfo.value.countryname) {
        this.UserFormInfo.value.countryid = element.Name;
      }
    });
    this.service.fetchpersonaldetails(this.bindLoginData?.Client.Email).subscribe(dtlsoffetchuser => {
      this.detailsonEmail = dtlsoffetchuser;
    })
    const updtprsnldetls = {
      Id: this.detailsonEmail.Id,
      FirstName: this.UserFormInfo.value.firstname,
      LastName: this.UserFormInfo.value.lastname,
      CountryId: this.UserFormInfo.value.countryname,
      CountryName: this.UserFormInfo.value.countryid,
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
      if(persnldtlsupdt === null) {
      this.respond = 'Details is updated successfully..!';
      this.editpersonaldetails = false;
    this.personalddetails = true;
      } else {
        this.respond = 'Error';
      }
      this.UserFormInfo.reset();
      this.afterupdate();
      // console.log('updatedetails', persnldtlsupdt);
    })
    
  }
  // getpersonaldetails for after update
  afterupdate() {
    this.service.fetchpersonaldetails(this.bindLoginData?.Client.Email).subscribe(dtlsoffetchuser => {
      this.detailsonEmail = dtlsoffetchuser;
    })
  }
  backtopersonaldetails() {
    this.personalddetails = true;
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
  // fetch the details gor contact us form
  contactwe() {
    this.service.fetchpersonaldetails(this.bindLoginData?.Client.Email).subscribe(dtlsoffetchuser => {
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
      // console.log('detailsonEmail', dtlsoffetchuser);
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
    const allmonetrytrnsctions = {}
    // get monetary transaction data
    this.service.getMonetarytransation(allmonetrytrnsctions).subscribe(monetarytransactionRes => {
      this.allMonetartTrans = monetarytransactionRes.reverse();
      // console.log('allMonetartTrans', monetarytransactionRes);
    })
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

  // 
  WithdrawalAmount() {
    const debitfund = {
      TPAccountNumber: this.UserFormInfo.value.tpaccountnumber,
      CurrencyId: '',
      CurrencyName: this.bindLoginData?.Client.CurrencyName,
      WithdrawAmount: this.UserFormInfo.value.amount,
      BankName: this.UserFormInfo.value.bankname,
      IBAN: this.UserFormInfo.value.iban
    }
    this.service.withdrawFund(debitfund).subscribe(withdrwlfndRes => {
      this.debitAmount = withdrwlfndRes;
      if(withdrwlfndRes === true) {
        this.respo = 'Amount is  withdrawal successfully..!';
      } else {
        this.respo = '';
      }
      this.UserFormInfo.reset();
      // console.log('debitAmount', withdrwlfndRes);
    })
  }
  // document type
  typeofdocument() {
    const dcmttype = {}
    this.service.docuType(dcmttype).subscribe(typedocmnts => {
      this.typesofdocuments = typedocmnts;
      // console.log('typesofdocuments',typedocmnts);
    })
  }
  file_name_show(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.uploadedFile = fileList[0];
      let fileSize: number = fileList[0].size;
    }
    }
  // uplddocument
  uplddocument() {
    const formData: FormData = new FormData();
    formData.append("uploadedFile", this.uploadedFile);
    formData.append("ClientId", this.bindLoginData?.Client.Id);
    this.service.uploaddocumnt(formData).subscribe(upldtdocmnt => {
      this.confidentialdocumnts = upldtdocmnt;
      if(upldtdocmnt === true) {
        this.respon = 'Documents is uploaded successfully..!';
      } else {
        this.respon = 'Error'; 
      }
      this.UserFormInfo.reset();
      // console.log('confidentialdocumnts',upldtdocmnt);
    })
  }
  // get country
getallCountry() {
  const obj ={}
  this.service.countryName(obj).subscribe(fetchcountry => {
    this.allCountries = fetchcountry;
    // console.log('allCountries',fetchcountry);
  })
}
getPhoneCode(val: any) {
  this.allCountries.forEach(element => {
    const y = +val;
    if (element.Id === y) {
      this.countryPhoneCode = element.ISDCode;
    }
  });
  this.UserFormInfo.controls.phonecode.setValue(
    '+' + this.countryPhoneCode
  );
}
}
