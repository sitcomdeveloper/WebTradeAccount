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
      preferredlanguge: [''],
      email: [''],
      password: [''],
      cnfrmpwd: [''],
    })
  }
  registerDemoAccountType() {
    const clntregisterParameter = {
      FirstName: this.newUserForm.value.firstname,
      LastName: this.newUserForm.value.lastname,
      CountryId: '',
      CountryName: this.newUserForm.value.countryname,
      CountryISDCode: this.newUserForm.value.phonecode,
      Phone:  this.newUserForm.value.phonenumber,
      PreferredLanguage: this.newUserForm.value.preferredlanguge,
      Email: this.newUserForm.value.email,
      Password: this.newUserForm.value.password,
      GroupId: '',
      GroupName: '',
      ISendEmail: '',
      AccountType: '',
      OwnerId: 1, 
      ConvertionDeskId: '',
      ConvertionDeskName: '',
      RealAccountTypeId: '',
      RealAccountTypeName: '',
      TradeAccountType: '',
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

}
