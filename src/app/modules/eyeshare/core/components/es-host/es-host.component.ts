import {
  Component, Injectable, Input, OnInit, ViewChild,
  OnDestroy, Type, Directive, ViewContainerRef, Injector, Output, EventEmitter, OnChanges
} from '@angular/core';
import { EsDocumentComponent } from '../es-document/es-document.component';
import { BehaviorSubject } from 'rxjs';

// ----------------------------------------------------------------------------

@Component({
  selector: 'host-default',
  template: `
      <h3>Host Default Component</h3>
      <h5>{{message}}</h5>
      <!-- <input type="text" [ngModel]="subjectModel.value" (ngModelChange)="subjectModel.next($event)" /> -->
      <!-- <input type="text" [(ngModel)]="message" (ngModelChange)="onChange($event)"/> -->
  `
})
export class HostDefaultComponent implements OnInit, OnChanges {
  @Input() message: string;
  @Output() messageChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() dataChange: EventEmitter<string> = new EventEmitter<string>();
  subjectModel: BehaviorSubject<string> = new BehaviorSubject("");
  constructor() { }
  ngOnInit() {
    this.subjectModel.next(this.message);
    this.subjectModel.subscribe(val => {
      // this.message = val;
      this.messageChange.emit(val)
      this.dataChange.emit(val);
    })
  }

  onChange(input: any) {
    console.log(input);
    this.messageChange.emit(input);
  }

  ngOnChanges(changes: any) {
    console.log(changes);
  }
}

// ----------------------------------------------------------------------------

@Component({
  selector: 'es-host',
  template: `
  <ng-container *ngxComponentOutlet="_component; context: data" (messageChange)="log($event)"></ng-container>
  `
})
export class EsHostComponent implements OnInit {
  @Input() component: Type<any>;
  @Input() data: any;
  _component = HostDefaultComponent;

  constructor() { }

  ngOnInit() {
    if (this.component) this._component = this.component;
  }

  log(input: any) {
    console.log(input);
  }
}

// ----------------------------------------------------------------------------

export const TEMPLATE_BASE = './templates/';

export function getTemplateUrl(cmp: string): string {
  return TEMPLATE_BASE + cmp + '.component' + "-" + "int" + '.html' || "awdad";
}

export const HELLO_SELECTOR = 'hello-component';
export const HELLO_TEMPLATE_URL = getTemplateUrl('test');

const test = true;

function getStringLiteralTemplate() {
  if (test) return `<div>HEIEIEIE</div>`
  else return `<div>jajajajajaja</div>`
}

function returnTrue() {
  return true;
}

const yesTemp = `<div>HEIEIEIE</div>`;
const noTemp = `<div>jajajajajaja</div>`;


const templ = returnTrue() ? yesTemp : noTemp
const templ2 = getStringLiteralTemplate();


@Component({
  selector: HELLO_SELECTOR,
  // templateUrl: HELLO_TEMPLATE_URL,
  // templateUrl: HELLO_TEMPLATE_URL,
  template: templ
})
export class HelloComponent {}