import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, Input, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { EsInitialize } from '../../helpers/component-decorators';
import { LoggerService } from '../../services/logger.service';

// ----------------------------------------------------------------------------

@EsInitialize
@Component({
  selector: 'es-lines-sub',
  template: `<div>SUB LINES</div>`,
  styles: [``]
})
export class EsLinesSubComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() message: string;

  constructor(private logger?: LoggerService) { }

  ngOnInit() {
    console.log("I am es lines sub");
  }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
