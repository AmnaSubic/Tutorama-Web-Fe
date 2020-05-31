import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appOpenReviews]'
})
export class OpenReviewsDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('profile-info').style.height = '0%';
    document.getElementById('classes').style.height = '0%';
    document.getElementById('services').style.height = '0%';
    document.getElementById('available-times').style.height = '0%';
    document.getElementById('reviews').style.height = '100%';
  }
}
