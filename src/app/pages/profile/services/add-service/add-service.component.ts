import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../../../services/jarwis.service';
import {SnotifyService} from 'ng-snotify';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  public currentUser;
  public subjects;
  public service = {
    Tutor_ID: null,
    Subject_ID: null,
    Service_Level: null,
    Service_Cost: null
  }

  public added = false;

  constructor(
    private jarwisService: JarwisService,
    private Notify: SnotifyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.currentUser = data);
    // @ts-ignore
    this.jarwisService.getSubjects().subscribe((data: any[]) => this.subjects = data.data);
  }

  onSubmit() {
    this.service.Tutor_ID = this.currentUser.User_ID;
    this.jarwisService.postService(this.service).subscribe(response => this.handleResponse());
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
            this.service.Subject_ID = null;
            this.service.Service_Level = null;
            this.service.Service_Cost = null;
            this.Notify.remove(toast.id);
          },
        }]
    });
  }

  goBack() {
    this.location.back();
  }
}
