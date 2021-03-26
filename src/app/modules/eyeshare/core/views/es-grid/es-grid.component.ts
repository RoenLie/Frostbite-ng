import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator, Type
} from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { EsInitialize, EsResolveAsync, EsTimer } from '../../helpers/component-decorators';
import { DataProviderService, Module } from '../../services/data-provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';

import { EsLinesComponent } from "../../components/es-lines/es-lines.component";
import { EsActionsComponent } from '../../components/es-actions/es-actions.component';
import { EsDocumentComponent } from '../../components/es-document/es-document.component';

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
  esDocumentComponent = EsDocumentComponent;

  txt: string = "initial text"
  txt2: any = {
    message: "initial test number 2"
  }


  constructor(
    public loggerService: LoggerService,
    private dataProviderService: DataProviderService,
    private workflowService: WorkflowService,
    private router: Router,
    private route: ActivatedRoute) { }

  log(input: any) {
    console.log(input);
  }

  @EsTimer()
  @EsResolveAsync()
  ngOnInit() {
    this.route.params.subscribe(p => this.routeParams = p as GridRouteParams);
    this.route.queryParams.subscribe(p => ({}));

    // this.loggerService.ngOnInit();
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
