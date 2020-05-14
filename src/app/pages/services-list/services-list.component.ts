import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../services/jarwis.service";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  public services;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getServices().subscribe((data: any[]) => this.services = data);
  }

}
