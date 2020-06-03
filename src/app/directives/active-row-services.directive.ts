import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appActiveRowServices]'
})
export class ActiveRowServicesDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('service-row').style.backgroundColor = '#19777b';
    document.getElementById('service-row').style.color = '#fff';
    document.getElementById('classes-row').style.backgroundColor = '#fff';
    document.getElementById('classes-row').style.color = '#000';
    document.getElementById('user-info-row').style.backgroundColor = '#fff';
    document.getElementById('user-info-row').style.color = '#000';
    document.getElementById('reviews-row').style.backgroundColor = '#fff';
    document.getElementById('reviews-row').style.color = '#000';
    document.getElementById('at-row').style.backgroundColor = '#fff';
    document.getElementById('at-row').style.color = '#000';
  }

}
