import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <div class="wrapper">
      <svg-icon
        src="assets/svg/404-error-1.svg"
        [svgStyle]="{'height.vh':'50', 'width.vw':'50'}">
      </svg-icon>
    </div>
  `,
  styles: [`
    :host {
      justify-content: space-around;
      align-items: center;
    }
  `]
})
export class Error404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
