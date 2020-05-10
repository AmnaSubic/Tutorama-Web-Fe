import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JarwisService } from '../../services/jarwis.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-forgot-password-response',
  templateUrl: './forgot-password-response.component.html',
  styleUrls: ['./forgot-password-response.component.scss']
})
export class ForgotPasswordResponseComponent implements OnInit {

  public error = [];
  public form = {
    email: null,
    password: null,
    resetToken: null
  }

  constructor(
    private route: ActivatedRoute,
    private Jarwis: JarwisService,
    private router: Router,
    private Notify: SnotifyService
  ) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit() {
    this.Jarwis.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    let _router = this.router;
    this.Notify.confirm('Done!, Now login with new password', {
      buttons: [{
        text: 'Okay', action: (toast) => {
          _router.navigateByUrl('/login'),
            this.Notify.remove(toast.id)
        },
      }]
    });
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
