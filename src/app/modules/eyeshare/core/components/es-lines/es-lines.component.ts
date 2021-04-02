import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { EsInitialize, EsComponentDeps } from '../../helpers/component-decorators';
import { LoggerService } from '../../services/logger.service';
import { EsLinesSubComponent } from '../es-lines-sub/es-lines-sub.component';


@EsInitialize
@Component({
  selector: 'es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
})
@EsComponentDeps({
  directives: [
    EsLinesSubComponent
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
