import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  newUserForm: FormGroup;
  NewRealUser: any;
  constructor(private service: ServicesService, private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      countryname: [''],
      date: [''],
      month: [''],
      year: [''],
      phonecode: [''],
      phonenumber: [''],
      currencyname: [''],
      email: [''],
      accounttype: [''],
      password: [''],
      cnfrmpwd: [''],
      promocode: ['']
    })
  }
  registerRealAccountType() {
    const clntregisterParameter = {
      FirstName: this.newUserForm.value.firstname,
      LastName: this.newUserForm.value.lastname,
      Email: this.newUserForm.value.email,
      Phone:  this.newUserForm.value.phonenumber,
      CountryId: '',
      CountryName: this.newUserForm.value.countryname,
      GroupId: '',
      GroupName: '',
      ISendEmail: '',
      AccountType: this.newUserForm.value.accounttype,
      Password: this.newUserForm.value.password,
      OwnerId: '',
      CountryISDCode: this.newUserForm.value.phonecode,
      ConvertionDeskId: '',
      ConvertionDeskName: '',
      RealAccountTypeId: '',
      RealAccountTypeName: '',
      TradeAccountType: '',
      PreferredLanguage: '',
      PromoCode: this.newUserForm.value.promocode
    }
    this.service.clientRegister(clntregisterParameter).subscribe(nwusrRes =>{
      this.NewRealUser = nwusrRes;
      console.log('NewRealUser',nwusrRes);
    })
  }

}
