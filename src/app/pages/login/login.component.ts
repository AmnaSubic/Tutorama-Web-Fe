import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private apiService: ApiService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  onSubmit() {
      this.apiService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {}

}
