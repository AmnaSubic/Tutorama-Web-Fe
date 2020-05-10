import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {JarwisService} from "../../services/jarwis.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser;

  constructor(
    private jarwisService: JarwisService
  ) {
    this.jarwisService.currentUserValue().subscribe((resp: any) => {
      this.currentUser = resp
    });
  }

  ngOnInit() {
  }

}
