import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <app-layout></app-layout>
    </div>
  `,
  styles: [`
    .wrapper {
      height: 100%;
      width: 100%;
      border: 1px solid rgba(0,0,0,0);

      background-color: rgba(var(--bg-color-1));
      color: rgba(var(--txt-color-1));
    }
  `]
})
export class AppComponent { }
