import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DefaultLayoutService } from './default.service';


@Component({
  selector: 'app-default',
  template: `
    <div class="layout-wrapper">
      <app-nav-top></app-nav-top>

      <app-nav-left
        *ngIf="defaultLayoutService
        .navigationLeftOpen">
      </app-nav-left>

      <app-nav-right
        *ngIf="defaultLayoutService
          .navigationRightOpen">
      </app-nav-right>
      
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  .layout-wrapper {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto 1fr auto;

    height: 100%;
  }
  .layout-wrapper >:last-child {
    grid-row: 2;
    grid-column: 2;

    display: flex;
    flex-flow: column nowrap;
    height: var(--view-height);
    overflow: hidden;
  }
  `],
  encapsulation: ViewEncapsulation.None
})
export class DefaultComponent implements OnInit {

  data: any;

  constructor(
    public defaultLayoutService: DefaultLayoutService
  ) { }

  ngOnInit(): void {
  }

}
