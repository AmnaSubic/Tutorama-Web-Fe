import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser;
  public services;
  public availableTimes;
  public image: string;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.currentUser = data);
    // @ts-ignore
    this.jarwisService.getAuthUserServices().subscribe((data: any[]) => this.services = data);
    // @ts-ignore
    this.jarwisService.getAuthUserAvailableTimes().subscribe((data: any[]) => this.availableTimes = data.data);
  }

  isTutor() {
    return this.currentUser.Is_Tutor;
  }

  isFixed() {
    return this.currentUser.Availability == 'Fixed';
  }

  isFree() {
    if (this.currentUser.Is_Free)
      return 'Reserved';
    else return 'Free';
  }

  dateFormat(date) {
    let d = date.split('-', 3);
    return d[2] + '.' + d[1] + '.' + d[0];
  }

  timeFormat(time) {
    let t = time.split(':', 2);
    return t[0] + ':' + t[1];
  }

  gender() {
    if (this.currentUser.Gender)
      return 'Male';
    else return 'Female';
  }




}
