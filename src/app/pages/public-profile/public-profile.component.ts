import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  public user;


  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.apiService.getUser(id).subscribe(data => this.user = data);
  }

  isTutor() {
    return this.user.Is_Tutor;
  }

  isFixed() {
    return this.user.Availability;
  }

  type() {
    if (this.user.Is_Tutor) return 'Tutor';
    else return 'Student';
  }

  age() {
    let d = this.user.Date_of_Birth.split('-', 1)
    let current = new Date().getFullYear();
    return current - d[0];
  }

  empty(element) {
    if (element == null) return '-';
    return element;
  }

}
