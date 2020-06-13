import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-public-tutor-services',
  templateUrl: './public-tutor-services.component.html',
  styleUrls: ['./public-tutor-services.component.scss']
})
export class PublicTutorServicesComponent implements OnInit {

  public services;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.apiService.getUserServices(id).subscribe(data => this.services = data);
  }

}
