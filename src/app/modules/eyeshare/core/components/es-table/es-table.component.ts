import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { styles } from "src/app/modules/eyeshare/implement/#implement.sys";
import { EsResolveAsync, EsTimer } from '../../helpers/component-decorators';
import { LoggerService } from '../../service-models/logger.service';


@Component({
  selector: 'es-table',
  templateUrl: './es-table.component.html',
  styleUrls: ['./es-table.component.scss'],
  styles: [styles.EsTable],
  providers: []
})
export class EsTableComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  constructor( private loggerService: LoggerService ) { }

  @EsResolveAsync()
  ngOnInit() { }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
