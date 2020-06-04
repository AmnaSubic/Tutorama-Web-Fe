import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  public user;


  constructor(
    private jarwisService: JarwisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.jarwisService.getUser(id).subscribe(data => this.user = data);
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

}
