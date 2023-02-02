import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = AppSettings.API_ENDPOINT;

  isLoggedIn = false;

  constructor(private http: HttpClient) {
  }
    
  login(email: string, password: string) {
    return this.http.post('/Identity/SignIn', { email, password })
    .pipe(tap((response: any) => {
      this.isLoggedIn = true;
      localStorage.setItem('jwt-token', response.token);
    }));
  }
}
