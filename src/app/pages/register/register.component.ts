import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form = {
    First_Name: null,
    Last_Name: null,
    Date_of_Birth: null,
    Gender: null,
    Address: null,
    Town: null,
    Country: null,
    Phone_Number: null,
    Description: null,
    Email: null,
    Username: null,
    Password: null,
    Is_Tutor: null,
    Experience: null,
    Availability: null
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router
  ) { }

  onSubmit() {
    this.Jarwis.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.form.Is_Tutor = null;
  }
}
