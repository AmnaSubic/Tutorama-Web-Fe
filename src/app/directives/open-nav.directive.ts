import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appOpenNav]'
})
export class OpenNavDirective {

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick() {
    document.getElementById('navBarItems').style.height = '100%';
  }
}
