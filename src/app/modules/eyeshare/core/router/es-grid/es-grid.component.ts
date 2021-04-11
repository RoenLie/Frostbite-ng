import { AfterViewInit, Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EsComponentDeps } from "@eyeshare/core/helpers/component-decorators";
import { EsDomainsComponent } from "@eyeshare/core/components/es-domains/es-domains.component";
import { EsModulesComponent } from "@eyeshare/core/components/es-modules/es-modules.component";
import { EsWorkflowsComponent } from "@eyeshare/core/components/es-workflows/es-workflows.component";
import { EsLinesComponent } from "@eyeshare/core/components/es-lines/es-lines.component";
import { EsDocumentComponent } from "@eyeshare/core/components/es-document/es-document.component";
import { EsActionsComponent } from "@eyeshare/core/components/es-actions/es-actions.component";
import { EsTableComponent } from "@eyeshare/core/components/es-table/es-table.component";
import { ResizableDirective } from "@eyeshare/core/directives/resize.directive";


interface GridRouteParams {
   tenant: string,
   domain: string,
   module: string,
   mode: string;
}


@Component( {
   selector: 'es-grid',
   templateUrl: './es-grid.component.html',
   styleUrls: [ './es-grid.component.scss' ],
} )
@EsComponentDeps( {
   directives: [
      EsDomainsComponent,
      EsModulesComponent,
      EsWorkflowsComponent,
      EsLinesComponent,
      EsDocumentComponent,
      EsActionsComponent,
      EsTableComponent,
      ResizableDirective
   ]
} )
export class EsGridComponent implements OnInit, AfterViewInit {
   routeParams: GridRouteParams;
   constructor ( private route: ActivatedRoute ) { }
   ngOnInit() {
      this.route.params.subscribe( p => this.routeParams = p as GridRouteParams );
      this.route.queryParams.subscribe( p => ( {} ) );
   }
   ngAfterContentInit() { }
   ngAfterViewInit() { }
}


@NgModule( {
   imports: [ CommonModule ],
   declarations: [ EsGridComponent ],
   providers: [],
   exports: [],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
} )
export class EsGridModule { }
