import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  public services;
  public routeSubject = this.route.snapshot.params.subject;
  public subject;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.apiService.getServices(this.routeSubject).subscribe(data => this.services = data);
  }

  search() {
    location.assign('/search/' + this.subject);
  }

  empty() {
    if (this.services.length == 0)
      return true;
  }
}
