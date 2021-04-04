import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoaderService } from '../lazy/lazy.service';
import { LAZY_WIDGETS } from '../lazy/lazy.token';
import { lazyArrayToObj } from '../lazy/lazy.helpers';
// ----------------------------------------------------------------------------


@Component({
  selector: 'es-portal',
  templateUrl: "./es-portal.component.html",
  styles: [`
    :host {
      display: grid;
      place-items: center;
    }
  `],
})
export class EsPortalComponent implements OnInit {

  message: string = "initial message from portal";
  constructor() { }

  ngOnInit() { }
}


// ----------------------------------------------------------------------------


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ EsPortalComponent ],
  providers: [ LazyLoaderService, { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj } ],
  exports: [ ],
})
export class EsPortalModule { }
