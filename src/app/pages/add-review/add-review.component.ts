import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JarwisService} from '../../services/jarwis.service';
//import {DatePipe} from '@angular/common';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  public review = {
    Tutor_ID: null,
    Student_ID: null,
    Date: null,
    Description: null,
    Rating: null,
    Is_Tutor: null
  }
  public user;
  protected id = this.route.snapshot.params.id;


  constructor(
    private route: ActivatedRoute,
    private jarwisService: JarwisService,
    private router: Router,
    private Notify: SnotifyService
  ) {}

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.user = data);
  }

  onSubmit() {
    if (this.user.Is_Tutor) {
      this.review.Tutor_ID = this.user.User_ID;
      this.review.Student_ID = this.id;
      this.review.Is_Tutor = 1;
    } else {
      this.review.Tutor_ID = this.id;
      this.review.Student_ID = this.user.User_ID;
      this.review.Is_Tutor = 0;
    }
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    let m;
    let d;
    if (month < 10)
      m = '0' + month;
    else m = month;
    if (day < 10)
      d = '0' + day;
    else d = day;
    this.review.Date = year + '-' + m + '-' + d;
    this.jarwisService.postReview(this.review).subscribe(response => this.handleResponse());
  }

  handleResponse() {
    this.Notify.confirm('Review added!', {
      buttons: [{
        text: 'Okay', action: (toast) => {
          this.router.navigateByUrl('/profile').then(r => this.Notify.remove(toast.id))
        },
      }]
    });
  }

}
