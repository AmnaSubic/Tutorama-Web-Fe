import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.scss']
})
export class ServiceInfoComponent implements OnInit {

  public serviceInfo;

  constructor(
    private jarwisService: JarwisService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.jarwisService.getServiceInfo(id).subscribe(data => this.serviceInfo = data)
  }

  goBack() {
    this.location.back();
  }
}
