import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { EsInitialize, EsResolveAsync, EsTimer } from '../../helpers/component-decorators';
import { DataProviderService, Module } from '../../services/data-provider.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';


interface GridRouteParams {
  tenant: string,
  domain: string,
  module: string,
  mode: string
}


@Component({
  selector: 'es-grid',
  templateUrl: './es-grid.component.html',
  styleUrls: ['./es-grid.component.scss'],
  providers: []
})
export class EsGridComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  routeParams: GridRouteParams;

  constructor(
    public loggerService: LoggerService,
    private dataProviderService: DataProviderService,
    private workflowService: WorkflowService,
    private router: Router,
    private route: ActivatedRoute) { }

  @EsTimer()
  @EsResolveAsync()
  ngOnInit() {
    this.route.params.subscribe(p => this.routeParams = p as GridRouteParams);
    this.route.queryParams.subscribe(p => ({}));

    this.loggerService.ngOnInit();
    // this.dataProviderService.data("invoice");
  }

  ngAfterContentInit() { }

  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
