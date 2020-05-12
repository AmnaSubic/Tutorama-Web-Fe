import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-popular-subjects',
  templateUrl: './popular-subjects.component.html',
  styleUrls: ['./popular-subjects.component.scss']
})
export class PopularSubjectsComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

}
