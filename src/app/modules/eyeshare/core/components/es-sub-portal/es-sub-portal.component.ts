import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EsComponent, EsInitialize } from '../../helpers/component-decorators';
import { LoggerService } from '../../services/logger.service';


@EsComponent()
// @EsInitialize
@Component({
  selector: 'es-sub-portal',
  template: `
  <p>  sub-portal SYS </p>
  <span>{{message}}</span>
  <es-child></es-child>
  `,
  styles:[``]
})
@EsComponent()
export class EsSubPortalComponent implements OnInit, OnDestroy {

  @Input() message: string;

  randomProp: string = "I am just a random prop";
  constructor(private logger: LoggerService) { }

  ngOnInit() {
    // console.log("sub portal component SYS");
    console.log(this.logger);
    
    // this.logger.ngOnInit();
  }

  ngOnDestroy() {
    // console.log("I am destroyed");
  }
}
