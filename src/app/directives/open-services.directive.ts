import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appOpenServices]'
})
export class OpenServicesDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('profile-info').style.height = '0%';
    document.getElementById('classes').style.height = '0%';
    document.getElementById('services').style.height = '100%';
    document.getElementById('available-times').style.height = '0%';
    document.getElementById('reviews').style.height = '0%';
  }
}
