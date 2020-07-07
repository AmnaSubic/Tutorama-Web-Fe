import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services;

  constructor(
    private apiService: ApiService,
    private Notify: SnotifyService
  ) { }

  ngOnInit() {
    this.apiService.getAuthUserServices().subscribe(data => this.services = data);
  }


  warning(id) {
    this.Notify.confirm('Are you sure you want to delete this service?', {
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            this.apiService.deleteService(id).subscribe();
            this.Notify.remove(toast.id);
            location.reload();
          },
        },
        {
          text: 'Cancel', action: (toast) => {
            this.Notify.remove(toast.id);
          },
        }]
    });
  }


}
