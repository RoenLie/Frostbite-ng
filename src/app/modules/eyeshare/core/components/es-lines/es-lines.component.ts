import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EsCardComponent } from "@eyeshare/core/components/es-card/es-card.component";
import { EsBaseComponent, EsComponentDeps } from "@eyeshare/core/helpers/component-decorators";
import { LoggerService } from "@eyeshare/core/services/logger.service";


@EsBaseComponent()
@EsComponentDeps( { directives: [ EsCardComponent ] } )
@Component( {
  selector: "es-lines",
  templateUrl: "es-lines.component.html",
  styleUrls: [ "es-lines.component.scss" ],
} )
export class EsLinesComponent implements OnInit, AfterViewInit {

  message: string = "Initial message";

  constructor ( public logger?: LoggerService ) { }

  ngOnInit() { }
  ngAfterViewInit() { }
}


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EsLinesComponent
  ],
  providers: [],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
} )
export class EsLinesModule { }