import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../services/jarwis.service";

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

  isAdmin() {
    return this.currentUser.Is_Tutor == 1;

  }

  ngOnInit() {
    this.jarwisService.currentUserValue().subscribe(data => this.currentUser = data);
  }

}
