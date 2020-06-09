import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JarwisService} from "../../../services/jarwis.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviews;

  constructor(
    private jarwisService: JarwisService
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthReviews().subscribe(data => this.reviews = data);
  }

  dateFormat(date) {
    let d = date.split('-', 3);
    return d[2] + '.' + d[1] + '.' + d[0];
  }

  rating(n) {
    return Array(n);
  }

  rev() {
    return this.reviews.length;
  }

}
