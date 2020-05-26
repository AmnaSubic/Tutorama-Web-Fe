import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../../../services/jarwis.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.scss']
})
export class ClassInfoComponent implements OnInit {

  protected id = this.route.snapshot.params.id;
  public class;
  public user;
  public hidden = false;

  constructor(
    private jarwisService: JarwisService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.user = data);
    this.jarwisService.getClassInfo(this.id).subscribe(data => this.class = data);
  }

  public val: string;

  show() {
    if (this.user.Is_Tutor)
      if (this.class.Stu_Status != 'Cancelled')
        return this.class.Status != 'Finished' || this.class.Status != 'Cancelled' || this.class.Status != 'Rejected';
    return false;
  }

  showStu() {
    if (!this.user.Is_Tutor)
      if (this.class.Status == 'Pending' || this.class.Status == 'Cancelled' || this.class.Status == 'Rejected')
        return false;
      else return this.class.Stu_Status == 'Started' || this.class.Stu_Status == null;
    return false;
  }

  reload() {
    location.reload();
  }

  onStart() {
    this.val = 'Started';
    if (this.user.Is_Tutor)
      this.jarwisService.updateClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
    else this.jarwisService.updateStudentClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
  }

  onFinish() {
    this.val = 'Finished';
    if (this.user.Is_Tutor)
      this.jarwisService.updateClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
    else this.jarwisService.updateStudentClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
  }

  onCancel() {
    this.val = 'Cancelled';
    if (this.user.Is_Tutor)
      this.jarwisService.updateClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
    else this.jarwisService.updateStudentClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
  }

  onAccept() {
    this.val = 'Accepted';
    if (this.user.Is_Tutor)
      this.jarwisService.updateClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
    else this.jarwisService.updateStudentClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
  }

  onReject() {
    this.val = 'rRejected';
    if (this.user.Is_Tutor)
      this.jarwisService.updateClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
    else this.jarwisService.updateStudentClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
  }

  public changed = false;
  handleResponse() {
    this.changed = true;
  }

  goBack() {
    this.location.back();
  }
}
