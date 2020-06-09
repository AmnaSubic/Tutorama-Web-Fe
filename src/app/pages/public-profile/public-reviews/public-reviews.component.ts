import { Component, OnInit } from '@angular/core';
import {JarwisService} from "../../../services/jarwis.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-public-reviews',
  templateUrl: './public-reviews.component.html',
  styleUrls: ['./public-reviews.component.scss']
})
export class PublicReviewsComponent implements OnInit {

  public reviews;

  constructor(
    private jarwisService: JarwisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.jarwisService.getUserReviews(id).subscribe(data => this.reviews = data);
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
