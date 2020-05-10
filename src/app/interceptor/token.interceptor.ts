import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {TokenService} from '../services/token.service';
import {Observable} from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public token: TokenService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(this.token.get());
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token.get()}`
      }
    });
    return next.handle(request);
  }
}
