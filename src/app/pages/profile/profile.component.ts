import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.currentUser = data);

    if (this.currentUser.Is_Tutor) {
      {
        document.getElementById('service-row').style.height = '50px';
      }
      if (this.currentUser.Availability == 'fixed')
      {
        document.getElementById('at-row').style.height = '50px';
      }
    }
  }

  isTutor() {
    return this.currentUser.Is_Tutor;
  }

  isFixed() {
    return this.currentUser.Availability == 'Fixed';
  }

  public s = false;
  public c = false;
  public at = false;
  public r = false;
  public p = true;

  showService() {
    this.s = true;
    this.c = false;
    this.p = false;
    this.r = false;
    this.at = false;
  }

  showAT() {
    this.at = true;
    this.c = false;
    this.p = false;
    this.r = false;
    this.s = false;
  }

  showC() {
    this.c = true;
    this.s = false;
    this.p = false;
    this.r = false;
    this.at = false;
  }

  showP() {
    this.p = true;
    this.c = false;
    this.s = false;
    this.r = false;
    this.at = false;
  }

  showR() {
    this.r = true;
    this.c = false;
    this.p = false;
    this.s = false;
    this.at = false;
  }

}
