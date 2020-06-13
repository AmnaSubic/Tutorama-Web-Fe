import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  public services;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getServices().subscribe((data: any[]) => this.services = data);
  }

}
