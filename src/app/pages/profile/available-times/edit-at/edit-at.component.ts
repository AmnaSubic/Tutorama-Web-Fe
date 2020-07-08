import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../services/api.service";
import {Location} from "@angular/common";
import {SnotifyService} from "ng-snotify";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-at',
  templateUrl: './edit-at.component.html',
  styleUrls: ['./edit-at.component.scss']
})
export class EditAtComponent implements OnInit {


  protected id = this.route.snapshot.params.id;
  public availableTime;

  constructor(
    private apiService: ApiService,
    private location: Location,
    private Notify: SnotifyService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.apiService.getAT(this.id).subscribe(data => this.availableTime = data);
  }

  onSubmit() {
    this.apiService.editAT({"Day": this.availableTime.Day,"Start_Time": this.availableTime.Start_Time,"End_Time": this.availableTime.End_Time}, this.id).subscribe();
    this.Notify.confirm('Time slot updated!', {
      buttons: [{
        text: 'Back', action: (toast) => {
          this.goBack();
          this.Notify.remove(toast.id);
        }
      }]
    });
  }

  goBack() {
    this.location.back();
  }

}
