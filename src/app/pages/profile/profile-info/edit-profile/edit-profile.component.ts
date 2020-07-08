import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ApiService} from "../../../../services/api.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  public user;

  constructor(
    private apiService: ApiService,
    private location: Location,
    private Notify: SnotifyService
  ) { }

  ngOnInit() {
    this.apiService.getAuthUser().subscribe(data => this.user = data);
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.apiService.editProfile(this.user).subscribe();
    this.Notify.confirm('Profile information updated!', {
      buttons: [{
          text: 'Back', action: (toast) => {
            this.goBack();
            this.Notify.remove(toast.id);
          }
        }]
    });

  }

  isTutor() {
    return this.user.Is_Tutor;
  }
}
