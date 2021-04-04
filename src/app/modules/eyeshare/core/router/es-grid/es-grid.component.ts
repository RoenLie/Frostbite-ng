import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator, Type, NgModule, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EsComponentDeps, EsInitialize, EsTimer } from '../../helpers/component-decorators';
import { DataProviderService, Module } from '../../services/data-provider.service';
import { LoggerService } from '../../services/logger.service';
import { WorkflowService } from '../../services/workflow.service';
import { EsLinesComponent } from "../../components/es-lines/es-lines.component";
import { EsActionsComponent } from '../../components/es-actions/es-actions.component';
import { EsDocumentComponent } from '../../components/es-document/es-document.component';
import { EsTableComponent } from '../../components/es-table/es-table.component';
import { EsDomainsComponent } from '../../components/es-domains/es-domains.component';
import { EsTabsComponent } from '../../components/es-tabs/es-tabs.component';
import { EsModulesComponent } from '../../components/es-modules/es-modules.component';
import { CommonModule } from '@angular/common';
// ----------------------------------------------------------------------------


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
})
@EsInitialize
@EsComponentDeps({
  directives: [
    EsDomainsComponent,
    EsModulesComponent,
    EsTabsComponent,
    EsLinesComponent,
    EsDocumentComponent,
    EsActionsComponent,
    EsTableComponent
  ]  
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

// ----------------------------------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EsGridComponent
  ],
  providers: [ ],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EsGridModule { }
