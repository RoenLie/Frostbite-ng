import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EsBaseComponent } from '../../helpers/component-decorators';
import { WorkflowService } from '../../services/workflow.service';


@EsBaseComponent()
@Component( {
  selector: 'es-workflows',
  templateUrl: './es-workflows.component.html',
  styleUrls: [ './es-workflows.component.scss' ]
} )
export class EsWorkflowsComponent implements OnInit {

  constructor (
    public workflowService: WorkflowService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe( params => {
      this.workflowService.active = params?.workflow;
    } );
  }

  activate( workflow: string ) {
    this.workflowService.active = workflow;

    const urlTree = this.router.createUrlTree( [], {
      queryParams: { workflow: this.workflowService.active },
      queryParamsHandling: "merge",
      preserveFragment: true
    } );

    this.router.navigateByUrl( urlTree );
  }
}


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EsWorkflowsComponent
  ],
  providers: [],
  exports: []
} )
export class EsTabsModule { }
