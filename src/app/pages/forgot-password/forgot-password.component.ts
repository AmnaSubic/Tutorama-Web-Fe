import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
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
    private apiService: ApiService,
    private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Wait...', {timeout:5000});
    this.apiService.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    this.notify.success(res.data, {timeout: 0});
    this.form.email = null;
  }
}
