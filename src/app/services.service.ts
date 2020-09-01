import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  // fund account
  fundAccount(fndaccntparamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'TradeAccount/AddDeposit',fndaccntparamtr);
  }
  // chnge pwd
  changePassword(chngepwdparamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/UpdatePasswordOfClient',chngepwdparamtr);
  }
  // contact us
  contactUs(contctusParamtr: any): Observable<any> {
    return this.http.post<any>(API_URL + 'Client/InsertClientQuery',contctusParamtr);
  }
}
