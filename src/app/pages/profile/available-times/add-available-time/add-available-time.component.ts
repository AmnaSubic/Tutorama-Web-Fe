import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {Location} from '@angular/common';
import {SnotifyService} from "ng-snotify";

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
    private apiService: ApiService,
    private location: Location,
    private Notify: SnotifyService
  ) { }

  ngOnInit() {
    this.apiService.getAuthUser().subscribe(data => this.currentUser = data);
  }

  onSubmit() {
    this.availableTime.Tutor_ID = this.currentUser.User_ID;
    this.apiService.postAvailableTime(this.availableTime).subscribe(response => this.handleResponse());
  }

  handleResponse() {
    this.Notify.confirm('Time added!', {
      buttons: [
        {
          text: 'Back', action: (toast) => {
            this.goBack();
            this.Notify.remove(toast.id);
          },
        },
        {
          text: 'Add another', action: (toast) => {
            this.availableTime.Start_Time = null;
            this.availableTime.End_Time = null;
            this.availableTime.Day = null;
            this.Notify.remove(toast.id);
          },
        }]
    });
  }

  goBack() {
    this.location.back();
  }
}
