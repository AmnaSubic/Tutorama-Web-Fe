import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-available-times',
  templateUrl: './available-times.component.html',
  styleUrls: ['./available-times.component.scss']
})
export class AvailableTimesComponent implements OnInit {

  public availableTimes;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.jarwisService.getAuthUserAvailableTimes().subscribe((data: any[]) => this.availableTimes = data.data);
  }

  timeFormat(time) {
    let t = time.split(':', 2);
    return t[0] + ':' + t[1];
  }
}