import { Component } from '@angular/core';

@Component({
  selector: 'tap-reveal',
  templateUrl: 'tap-reveal.html'
})
export class TapRevealComponent {

  toggled: boolean = false;

  constructor() {

  }

  toggle() {
    this.toggled = !this.toggled;
  }

}
