import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public form = {
    email: null
};

  constructor(
    private Jarwis: JarwisService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Wait...', {timeout:5000});
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout: 0});
    this.form.email = null;
  }
}