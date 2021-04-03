import { CommonModule, NgClass, NgComponentOutlet, NgForOf, NgIf, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ComponentDecorator, DoCheck, OnChanges,
  OnDestroy, OnInit, TypeDecorator
} from '@angular/core';
import { FormsModule, NgForm, NgModel, NgModelGroup, ɵInternalFormsSharedModule } from '@angular/forms';
import { EsInitialize, EsComponentDeps } from '../../helpers/component-decorators';
import { LoggerService } from '../../services/logger.service';
import { EsLinesSubComponent } from '../es-lines-sub/es-lines-sub.component';

// ----------------------------------------------------------------------------

@Component({
  selector: 'es-lines',
  templateUrl: './es-lines.component.html',
  styleUrls: ['./es-lines.component.scss'],
})
@EsInitialize
@EsComponentDeps({
  directives: [
    EsLinesSubComponent
  ]
})
export class EsLinesComponent implements OnInit, OnChanges, DoCheck, OnDestroy,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  message: string = "Initial message";

  constructor(private logger: LoggerService) { }

  ngOnInit() { }
  ngAfterContentInit() { }
  ngAfterViewInit() { }
  ngOnChanges(changes: any) { }
  ngDoCheck() { }
  ngAfterViewChecked() { }
  ngAfterContentChecked() { }
  ngOnDestroy() { }
}
