import { CommonModule } from '@angular/common';
import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, CUSTOM_ELEMENTS_SCHEMA,
  DoCheck, NgModule, OnChanges, OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EsInitialize, EsComponentDeps, EsBaseComponent } from '../../helpers/component-decorators';
import { LoggerService } from '../../services/logger.service';
import { EsLinesSubComponent } from '../es-lines-sub/es-lines-sub.component';
// ----------------------------------------------------------------------------

@EsBaseComponent()
@EsComponentDeps({ directives: [EsLinesSubComponent] })
@Component({
  selector: 'es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
})
export class EsLinesComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  message: string = "Initial message";

  constructor(public logger?: LoggerService) { }

  ngOnInit() { }
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
    FormsModule,
  ],
  declarations: [
    EsLinesComponent
  ],
  providers: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EsLinesModule { }