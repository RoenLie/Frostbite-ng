import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, DoCheck, Input, NgModule, OnChanges,
  OnDestroy, OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EsBaseComponent } from '../../helpers/component-decorators';
import { LoggerService } from '../../services/logger.service';


@EsBaseComponent()
@Component({
  selector: 'es-lines-sub',
  template: `<div>SUB LINES</div>`,
  styles: [``]
})
export class EsLinesSubComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() message: string;

  constructor(private logger?: LoggerService) { }

  ngOnInit() {
    console.log("I am es lines sub");
  }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EsLinesSubComponent
  ],
  providers: [],
  exports: []
})
export class EsLinesSubModule { }
