import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmailValidator } from '@angular/forms';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  // register
  clientRegister(clntregisterParameter: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/AddClient', clntregisterParameter);
  }
  clientLogin(clntloginParamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/AuthClient',clntloginParamtr);
  }
  // fund account
  fundAccount(fndaccntparamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'TradeAccount/AddDeposit', fndaccntparamtr);
  }
  // get personal details
  fetchpersonaldetails(email: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/GetTradeAccountDetailWithAddressById?email=' + email, {})
  }
  // update perosnal details
  updatepersonaldetails(updtprsnldetls: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/UpdateClientWithAddress', updtprsnldetls);
  }
  // chnge pwd
  changePassword(chngepwdparamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/UpdatePasswordOfClient', chngepwdparamtr);
  }
  // contact us
  contactUs(contctusParamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/InsertClientQuery', contctusParamtr);
  }
  // forgot password
  forgotpwd(frgt: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/TPAccountForgotPassword?email=' + frgt, {})
  }
  // get all monetary transactions by tp account
  getMonetarytransation(allmonetrytrnsctions: any): Observable<any> {
    return this.http.post<any>(API_URL + 'TradeAccount/GetFinancialTransactionByTPAccountNumber?tpaccount=' + allmonetrytrnsctions, {});
  }
   // withdrawal amont
   withdrawFund(debitfund: any): Observable<any> {
    return this.http.post<any>(API_URL + 'TradeAccount/WithdrawalAmount', debitfund);
  }
  // upload document API
// document type
docuType(dcmttype: any): Observable<any> {
  return this.http.post<any>(API_URL + 'TradeAccount/GetDocumentType ', dcmttype);
}
// upload document
uploaddocumnt(uplddocument: any): Observable<any> {
  return this.http.post<any>(API_URL + 'TradeAccount/UploadDocuments', uplddocument);
}
// country name
countryName(obj: any): Observable<any> {
  return this.http.post<any>(API_URL + 'User/GetAllCountries', obj);
}
}
