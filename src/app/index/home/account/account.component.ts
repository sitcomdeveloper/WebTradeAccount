import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  newUserForm: FormGroup;
  NewRealUser: any;
  response: string;
  allCountries: any;
  countryPhoneCode: any;
  constructor(private service: ServicesService, private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      countryname: [''],
      countryid: [''],
      date: [''],
      month: [''],
      year: [''],
      phonecode: [''],
      phonenumber: [''],
      currencyid: [''],
      currencyname: [''],
      email: [''],
      accounttype: [''],
      password: [''],
      cnfrmpwd: [''],
      promocode: ['']
    })
    this.getallCountry();
  }
  registerRealAccountType() {
    this.allCountries.forEach(element => {
      if ( element.Id === +this.newUserForm.value.countryname) {
        this.newUserForm.value.countryid = element.Name;
      }
    });
    const clntregisterParameter = {
      FirstName: this.newUserForm.value.firstname,
      LastName: this.newUserForm.value.lastname,
      Email: this.newUserForm.value.email,
      Phone:  this.newUserForm.value.phonenumber,
      CountryId: this.newUserForm.value.countryname,
      CountryName: this.newUserForm.value.countryid,
      CurrencyId: '',
      CurrencyName: this.newUserForm.value.currencyname,
      GroupId: '',
      GroupName: '',
      ISendEmail: '',
      AccountType: 'Real',
      Password: this.newUserForm.value.password,
      OwnerId: 4,
      CountryISDCode: this.newUserForm.value.phonecode,
      ConvertionDeskId: '',
      ConvertionDeskName: '',
      RealAccountTypeId: '',
      RealAccountTypeName: this.newUserForm.value.accounttype,
      TradeAccountType: "Real",
      PreferredLanguage: '',
      PromoCode: this.newUserForm.value.promocode,
      DateOfBirth: this.newUserForm.value.date + this.newUserForm.value.month + this.newUserForm.value.year
    }
    this.service.clientRegister(clntregisterParameter).subscribe(nwusrRes =>{
      this.NewRealUser = nwusrRes;
      if (nwusrRes === 'null') {
        this.response = '';
      } else {
        this.response = 'Real Account is registered successfully..!';
      }
      this.newUserForm.reset();
      console.log('NewRealUser',nwusrRes);
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
  this.newUserForm.controls.phonecode.setValue(
    '+' + this.countryPhoneCode
  );
}
}
