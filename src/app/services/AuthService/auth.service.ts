import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AppSettings } from '../../AppSettings';
import { LoginInfo } from '../../models/login-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = AppSettings.API_ENDPOINT;
  isLoggedIn = false;

  constructor(private http: HttpClient) {
    let token = localStorage.getItem('jwt-token');
    console.log(token);
    if (token)
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;
  }
    
  login(email: string, password: string) {
    let loginInfo = {Email: email, Password: password};
    return this.http.post(this.baseApiUrl + `/Identity/SignIn`, loginInfo, { responseType: 'text'})
    .pipe(tap((response: any) => {
      this.isLoggedIn = true;
      console.log(response);
      localStorage.setItem('jwt-token', response);
    }));
  }

  logout() {
    localStorage.removeItem("jwt-token");
    this.isLoggedIn = false;
  }
}
