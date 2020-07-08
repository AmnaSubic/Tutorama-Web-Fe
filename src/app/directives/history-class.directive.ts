import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appHistoryClass]'
})
export class HistoryClassDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('history').style.backgroundColor = '#19777b';
    document.getElementById('history').style.color = 'white';
    document.getElementById('current').style.backgroundColor = 'white';
    document.getElementById('current').style.color = 'black';
  }
}
