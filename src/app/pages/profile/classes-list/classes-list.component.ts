import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  public classes;

  constructor(
    private apiService: ApiService,
    private location: Location
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.apiService.getAuthClasses().subscribe(data => this.classes = data);
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

}
