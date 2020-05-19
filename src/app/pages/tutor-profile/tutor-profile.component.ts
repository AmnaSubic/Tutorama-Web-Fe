import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss']
})
export class TutorProfileComponent implements OnInit {
  public tutor;
  public services;
  public availableTimes;

  constructor(
    private jarwisService: JarwisService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    // @ts-ignore
    this.jarwisService.getUser(id).subscribe(data => this.tutor = data);
    this.jarwisService.getUserServices(id).subscribe(data => this.services = data);
    // @ts-ignore
    this.jarwisService.getUserAvailableTimes(id).subscribe(data => this.availableTimes = data.data);
  }

  goBack() {
    this.location.back();
  }

}
