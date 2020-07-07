import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {SnotifyService} from "ng-snotify";

@Component({
  selector: 'app-available-times',
  templateUrl: './available-times.component.html',
  styleUrls: ['./available-times.component.scss']
})
export class AvailableTimesComponent implements OnInit {

  public availableTimes;

  constructor(
    private apiService: ApiService,
    private Notify: SnotifyService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.apiService.getAuthUserAvailableTimes().subscribe((data: any[]) => this.availableTimes = data.data);
  }

  timeFormat(time) {
    let t = time.split(':', 2);
    return t[0] + ':' + t[1];
  }

  warning(id) {
    this.Notify.confirm('Are you sure you want to delete this time slot?', {
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            this.apiService.deleteAT(id).subscribe();
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
