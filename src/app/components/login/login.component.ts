import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  token: string = '';

  loginInfo = {
    email: '',
    password: ''
  };

  constructor(private fb:FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
  }

  login() {
    if (this.loginInfo.email && this.loginInfo.password) {
        this.authService
          .login(this.loginInfo.email, this.loginInfo.password)
          .subscribe((r) => {
            this.router.navigate(['']);
          });
    }
  }
}
