import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appCloseNav]'
})
export class CloseNavDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('nav-bar-items').style.height = '0%';
  }
}
