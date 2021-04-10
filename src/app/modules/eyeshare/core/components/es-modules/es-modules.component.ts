import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EsBaseComponent } from '../../helpers/component-decorators';
import { Module, ModuleService } from '../../services/module.service';


@EsBaseComponent()
@Component( {
  selector: 'es-modules',
  templateUrl: './es-modules.component.html',
  styleUrls: [ './es-modules.component.scss' ]
} )
export class EsModulesComponent implements OnInit {

  constructor (
    public moduleService: ModuleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.moduleService.active = params?.workflow;
    // })
  }

  activate( module: Module ) {
    const activeModule = this.moduleService.active.getValue();

    if ( module == activeModule ) return;

    const previous = activeModule.description || "";

    this.moduleService.active.next( module );

    const url = this.router.url.split( "?" )[ 0 ].replace( previous, module.description || "" );

    const urlTree = this.router.createUrlTree( [ url ] );

    this.router.navigateByUrl( urlTree );
  }
}


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EsModulesComponent
  ],
  providers: [],
  exports: []
} )
export class EsModulesModule { }
