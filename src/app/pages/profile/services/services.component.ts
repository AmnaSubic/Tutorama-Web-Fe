import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUserServices().subscribe(data => this.services = data);
  }




}
