import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../../../services/jarwis.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SnotifyService} from 'ng-snotify';


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
    private location: Location,
    private Notify: SnotifyService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.jarwisService.getAuthUser().subscribe(data => this.user = data);
    this.jarwisService.getAuthClassInfo(this.id).subscribe(data => this.class = data);
  }

  public val: string;

  show() {
    if (this.user.Is_Tutor)
      if (this.class.Stu_Status != 'Cancelled')
        return this.class.Status == 'Pending' || this.class.Status == 'Started' || this.class.Status == 'Accepted';
    return false;
  }

  showStu() {
    if (!this.user.Is_Tutor)
      if (this.class.Status == 'Pending' || this.class.Status == 'Cancelled' || this.class.Status == 'Rejected')
        return false;
      else return this.class.Stu_Status == 'Started' || this.class.Stu_Status == null;
    return false;
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
    this.val = 'Rejected';
    if (this.user.Is_Tutor)
      this.jarwisService.updateClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
    else this.jarwisService.updateStudentClassStatus(this.val, this.id).subscribe(response => this.handleResponse());
  }

  handleResponse() {
    if (this.val == 'Finished')
      this.Notify.confirm('Status changed to: ' + this.val + '. Review ' + this.class.First_Name + ' '+ this.class.Last_Name, {
        buttons: [{
          text: 'Okay', action: (toast) => {
            if (this.user.Is_Tutor) {
              this.router.navigate(['add-review', this.class.Student_ID]).then(r => this.Notify.remove(toast.id));
            }
            else {
              this.router.navigate(['add-review', this.class.Tutor_ID]).then(r => this.Notify.remove(toast.id));
            }
          },
        }]
      });
    else this.Notify.confirm('Status changed to: ' + this.val, {
      buttons: [{
        text: 'Okay', action: (toast) => {
          this.reload()
          this.Notify.remove(toast.id)
        },
      }]
    });
  }


  reload() {
    location.reload();
  }

  goBack() {
    this.location.back();
  }

  dateFormat(date) {
    let d = date.split('-', 3);
    return d[2] + '.' + d[1] + '.' + d[0];
  }

  timeFormat(time) {
    let t = time.split(':', 2);
    return t[0] + ':' + t[1];
  }

  tOrS() {
    if (this.user.Is_Tutor)
      return 'student';
    else return 'tutor';
  }

  age(date) {
    let d = date.split('-', 1)
    let current = new Date().getFullYear();
    return current - d[0];
  }

  stuStatus(status) {
    if (status == null)
      return 'n/a';
    else return status;
  }

  gender(gender) {
    if (gender)
      return 'Male';
    else return 'Female';
  }

  profileId() {
    if (this.user.Is_Tutor) return this.class.Student_ID;
    else return this.class.Tutor_ID;
  }
}
