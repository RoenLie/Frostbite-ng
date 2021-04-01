import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { EsInitialize } from '../../helpers/component-decorators';
import { ComponentDeps } from '../../helpers/utils';
import { LoggerService } from '../../services/logger.service';
import { ES_LINES_SUB_COMPONENTS } from './es-lines-sub';


// @EsInitialize
@Component({
  selector: 'es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
})
@ComponentDeps({
  directives: [
  ...ES_LINES_SUB_COMPONENTS
  ]
})
export class EsLinesComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  constructor(private logger: LoggerService) { }

  ngOnInit() { }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
