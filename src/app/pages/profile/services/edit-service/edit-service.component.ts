import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {SnotifyService} from "ng-snotify";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {

  protected id = this.route.snapshot.params.id;
  public service;

  constructor(
    private apiService: ApiService,
    private Notify: SnotifyService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.apiService.getAuthService(this.id).subscribe(data => this.service = data);
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    this.apiService.editService({"Service_Level": this.service.Service_Level, "Service_Cost": this.service.Service_Cost}, this.id).subscribe();
    this.Notify.confirm('Service updated!', {
      buttons: [{
        text: 'Back', action: (toast) => {
          this.goBack();
          this.Notify.remove(toast.id);
        }
      }]
    });
  }

}
