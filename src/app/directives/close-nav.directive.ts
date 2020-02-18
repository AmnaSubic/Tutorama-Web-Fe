import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appCloseNav]'
})
export class CloseNavDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('navBarItems').style.height = '0%';
  }
}
