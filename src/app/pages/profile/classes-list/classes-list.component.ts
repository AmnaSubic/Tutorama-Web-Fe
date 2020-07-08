import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  public classesCurrent;
  public classesHistory;

  constructor(
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit() {
    this.apiService.getAuthClassesCurrent().subscribe(data => this.classesCurrent = data);
    this.apiService.getAuthClassesHistory().subscribe(data => this.classesHistory = data);
  }

  goBack() {
    this.location.back();
  }

  dateFormat(date) {
    let d = date.split('-', 3);
    return d[2] + '.' + d[1] + '.' + d[0];
  }

  timeFormat(time) {
    let t = time.split(':', 2);
    return t[0] + ':' + t[1];
  }

  public curr = true;
  public his = false;

  showCurrent() {
    this.curr = true;
    this.his = false;
  }

  showHistory() {
    this.curr = false;
    this.his = true;
  }

  emptyCurr() {
    if (this.classesCurrent.length == 0) return true;
  }

  emptyHis() {
    if (this.classesHistory.length == 0) return true;
  }

}
