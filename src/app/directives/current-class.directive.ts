import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appCurrentClass]'
})
export class CurrentClassDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('current').style.backgroundColor = '#19777b';
    document.getElementById('current').style.color = 'white';
    document.getElementById('history').style.backgroundColor = 'white';
    document.getElementById('history').style.color = 'black';
  }
}
