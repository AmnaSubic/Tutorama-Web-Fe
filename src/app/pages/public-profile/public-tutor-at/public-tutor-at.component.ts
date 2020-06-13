import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-public-tutor-at',
  templateUrl: './public-tutor-at.component.html',
  styleUrls: ['./public-tutor-at.component.scss']
})
export class PublicTutorAtComponent implements OnInit {

  public ats;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.apiService.getUserAvailableTimes(id).subscribe(data => this.ats = data["data"]);
  }

  timeFormat(time) {
    let t = time.split(':', 2);
    return t[0] + ':' + t[1];
  }

}
