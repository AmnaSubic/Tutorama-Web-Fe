import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public loggedIn: boolean;
  public user;

  constructor(
    private Auth: AuthService,
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
    // @ts-ignore
    this.jarwisService.getAuthUser().subscribe(data => this.user = data);
  }

  isStudent() {
    return !this.user.Is_Tutor;
  }

}
