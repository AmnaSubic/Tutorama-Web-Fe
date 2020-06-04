import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-public-tutor-services',
  templateUrl: './public-tutor-services.component.html',
  styleUrls: ['./public-tutor-services.component.scss']
})
export class PublicTutorServicesComponent implements OnInit {

  public services;

  constructor(
    private jarwisService: JarwisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.jarwisService.getUserServices(id).subscribe(data => this.services = data);
  }

}
