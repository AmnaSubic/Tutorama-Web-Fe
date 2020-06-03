import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  public currentUser;

  constructor(
    private jarwisService:JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.currentUser = data);
  }

  dob() {
    let d = this.currentUser.Date_of_Birth.split('-', 3);
    return d[2] + '.' + d[1] + '.' + d[0];
  }

  gender() {
    if (this.currentUser.Gender)
      return 'Male';
    else return 'Female';
  }

  isTutor() {
    return this.currentUser.Is_Tutor;
  }

}
