import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../services/jarwis.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public currentUser;
  public services;
  public availableTimes;

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
    return this.currentUser.Availability == 'fixed';
  }

}
