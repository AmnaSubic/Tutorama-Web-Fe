import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-add-available-time',
  templateUrl: './add-available-time.component.html',
  styleUrls: ['./add-available-time.component.scss']
})
export class AddAvailableTimeComponent implements OnInit {

  public currentUser;
  public added;
  public availableTime = {
    Tutor_ID: null,
    Day: null,
    Start_Time: null,
    End_Time: null,
    Is_Free: 1
  };

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.currentUser = data);
  }

  onSubmit() {
    this.availableTime.Tutor_ID = this.currentUser.User_ID;
    this.jarwisService.postAvailableTime(this.availableTime).subscribe(response => this.handleResponse());
  }

  handleResponse() {
    this.added = true;
  }

  reset() {
    this.added = false;
  }
}
