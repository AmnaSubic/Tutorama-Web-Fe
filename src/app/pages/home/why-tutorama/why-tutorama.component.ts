import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-why-tutorama',
  templateUrl: './why-tutorama.component.html',
  styleUrls: ['./why-tutorama.component.scss']
})
export class WhyTutoramaComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

}
