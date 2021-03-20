import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { LoggerService } from '../../service-models/logger.service';
import { styles } from "src/app/modules/eyeshare/implement/implement.sys";
import { EsInitialize, EsResolveAsync, EsTimer } from '../../helpers/component-decorators';
import { DataProviderService, Module } from '../../service-models/data-provider.service';

@EsInitialize
@Component({
  selector: 'app-es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
  styles: [styles.EsLines],
  providers: []
})
export class EsLinesComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  constructor(public logger: LoggerService, private dataProvider: DataProviderService) { }

  @EsTimer("ngOnInit")
  @EsResolveAsync()
  ngOnInit() {
    // this.logger.ngOnInit();
    this.dataProvider.data(Module.generalLedger);
  }

  @EsTimer("ngAfterContentInit")
  @EsResolveAsync()
  ngAfterContentInit() { }

  @EsTimer("ngAfterViewInit")
  @EsResolveAsync()
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
