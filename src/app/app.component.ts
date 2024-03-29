import { Component } from '@angular/core';
import { AuthService } from './services/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Реестр';

  constructor(public authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}
