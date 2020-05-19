import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {
  public classes;
  public user;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    // @ts-ignore
    this.jarwisService.getAuthClasses().subscribe(data => this.classes = data)

  }

}
