import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { LoggerService } from '../../service-models/logger.service';
import { styles } from "src/app/modules/eyeshare/implement/#implement.sys";
import { EsInitialize, EsResolveAsync, EsTimer } from '../../helpers/component-decorators';
import { DataProviderService, Module } from '../../service-models/data-provider.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { WorkflowService } from '../../service-models/workflow.service';
import { esServicesAsync } from '../../helpers/es-helpers';


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
  styles: [styles.EsGrid],
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
    this.route.queryParams.subscribe(p => console.log(p));

    this.loggerService.ngOnInit();
    // this.dataProvider.data(Module.generalLedger);
  }

  ngAfterContentInit() { }

  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
  navigate(event: any) {
    console.log("naviating");
    this.router.navigate(["/es/lines"], { queryParams: { val: 'Query params for route 1' }});
  }
}
