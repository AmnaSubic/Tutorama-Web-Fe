import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  public currentUser;
  public subjects;
  public service = {
    Tutor_ID: null,
    Subject_ID: null,
    Service_Level: null,
    Service_Cost: null
  }

  public added = false;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.currentUser = data);
    // @ts-ignore
    this.jarwisService.getSubjects().subscribe((data: any[]) => this.subjects = data.data);
  }

  onSubmit() {
    this.service.Tutor_ID = this.currentUser.User_ID;
    this.jarwisService.postService(this.service).subscribe(response => this.handleResponse());
  }

  handleResponse() {
    this.added = true;
  }

  reset() {
    this.added = false;
  }
}
