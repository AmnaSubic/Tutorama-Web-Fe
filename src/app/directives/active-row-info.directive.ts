import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appActiveRowInfo]'
})
export class ActiveRowInfoDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('user-info-row').style.backgroundColor = '#19777b';
    document.getElementById('user-info-row').style.color = '#fff';
    document.getElementById('classes-row').style.backgroundColor = '#fff';
    document.getElementById('classes-row').style.color = '#000';
    document.getElementById('service-row').style.backgroundColor = '#fff';
    document.getElementById('service-row').style.color = '#000';
    document.getElementById('reviews-row').style.backgroundColor = '#fff';
    document.getElementById('reviews-row').style.color = '#000';
    document.getElementById('at-row').style.backgroundColor = '#fff';
    document.getElementById('at-row').style.color = '#000';
  }

}
