import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-demoaccount',
  templateUrl: './demoaccount.component.html',
  styleUrls: ['./demoaccount.component.css']
})
export class DemoaccountComponent implements OnInit {
  newUserForm: FormGroup;
  NewDemoUser: any;
  response: string;
  allCountries: any;
  countryPhoneCode: any;
  constructor(private service: ServicesService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      countryname: [''],
      date: [''],
      month: [''],
      year: [''],
      phoneCode: [''],
      phonenumber: [''],
      preferredlanguge: [''],
      email: [''],
      password: [''],
      cnfrmpwd: [''],
    })
    this.getallCountry();
  }
  registerDemoAccountType() {
    const clntregisterParameter = {
      FirstName: this.newUserForm.value.firstname,
      LastName: this.newUserForm.value.lastname,
      CountryId: '',
      CountryName: this.newUserForm.value.countryname,
      CountryISDCode: this.newUserForm.value.phoneCode,
      Phone:  this.newUserForm.value.phonenumber,
      PreferredLanguage: this.newUserForm.value.preferredlanguge,
      Email: this.newUserForm.value.email,
      Password: this.newUserForm.value.password,
      GroupId: '',
      GroupName: '',
      ISendEmail: '',
      AccountType: "Lead",
      OwnerId: 1, 
      ConvertionDeskId: '',
      ConvertionDeskName: '',
      RealAccountTypeId: '',
      RealAccountTypeName: '',
      TradeAccountType: "Lead",
      PromoCode: ''
    }
    this.service.clientRegister(clntregisterParameter).subscribe(nwusrRes =>{
      this.NewDemoUser = nwusrRes;
      if (nwusrRes === 'null') {
        this.response = '';
      } else {
        this.response = 'Demo Account is registered successfully..!';
      }
      this.newUserForm.reset();
      console.log('NewDemoUser',nwusrRes);
    })
  }
  // get country
  getallCountry() {
    const obj ={}
    this.service.countryName(obj).subscribe(fetchcountry => {
      this.allCountries = fetchcountry;
    })
  }
  getPhoneCode(val: any) {
    this.allCountries.forEach(element => {
      const y = +val;
      if (element.Id === y) {
        this.countryPhoneCode = element.ISDCode;
      }
    });
    this.newUserForm.controls.phoneCode.setValue(
      '+' + this.countryPhoneCode
    );
  }
}
