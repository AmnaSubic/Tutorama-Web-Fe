import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-schedule-class',
  templateUrl: './schedule-class.component.html',
  styleUrls: ['./schedule-class.component.scss']
})
export class ScheduleClassComponent implements OnInit {
  public service;
  public user;
  public form = {
    Service_ID: null,
    Student_ID: null,
    Date: null,
    Start_at: null,
    End_at: null,
    Place: null,
    Price: null
  };
  public time = {
    sth: null,
    stm: null,
    eth: null,
    etm: null
  };
  public place: string = null;
  public error: string;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private Notify: SnotifyService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.apiService.getServiceInfo(id).subscribe(data => this.service = data);
    this.apiService.getAuthUser().subscribe(data => this.user = data);
  }

  minutes(start, end) {
    return Math.abs(start - end)/60
  }

  onSubmit() {
    let hour = this.time.eth - this.time.sth;
    let minutes = Math.abs(this.time.stm - this.time.etm)/60;
    let t = hour + minutes;
    if (t < 1) {
      this.error = 'Duration of the class needs to be at least one hour.';
      console.log(this.error);
    } else {
      this.form.Service_ID = this.service.Service_ID;
      this.form.Student_ID = this.user.User_ID;
      this.form.Price = this.service.Service_Cost * t;
      if (this.time.sth < 10)
        this.form.Start_at = '0' + this.time.sth;
      else this.form.Start_at = this.time.sth;
      if (this.time.stm < 10)
        this.form.Start_at += ':0' + this.time.stm;
      else this.form.Start_at += ':' + this.time.stm;
      this.form.Start_at += ':00';
      if (this.time.eth < 10)
        this.form.End_at = '0' + this.time.eth;
      else this.form.End_at = this.time.eth;
      if (this.time.etm < 10)
        this.form.End_at += ':0' + this.time.etm;
      else this.form.End_at += ':' + this.time.etm;
      this.form.End_at += ':00'
      this.apiService.postClass(this.form).subscribe(response => this.handleResponse());
    }
  }

  serviceAddress() {
    return this.service.Address + ', ' +  this.service.Town + ', ' +this.service.Country;
  }

  userAddress() {
    return this.user.Address + ', ' + this.user.Town + ', ' + this.user.Country;
  }


  public added = false;

  handleResponse() {
    this.Notify.confirm('Class scheduled!', {
      buttons: [{
          text: 'Okay', action: (toast) => {
            this.router.navigateByUrl('/search/all').then(r => this.Notify.remove(toast.id))
          },
        }]
    });
  }

  maxStartTime() {
    if (this.time.sth == 21)
      this.time.stm = 0;
  }

  maxEndTime() {
    if (this.time.eth == 22)
      this.time.etm = 0;
  }

  goBack() {
    this.location.back();
  }

  p() {
    return this.form.Place == 'Online' || this.form.Place == this.serviceAddress() || this.form.Place == this.userAddress() || this.form.Place == null;
  }

  condition() {
    if (this.form.Place == this.place)
      return true;
  }



}
