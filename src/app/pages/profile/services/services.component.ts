import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getAuthUserServices().subscribe(data => this.services = data);
  }




}
