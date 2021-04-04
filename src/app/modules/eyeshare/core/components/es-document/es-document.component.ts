import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { EsComponentDeps, EsInitialize } from '../../helpers/component-decorators';
import { EsInputComponent } from '../es-input/es-input.component';
// ----------------------------------------------------------------------------


@Component({
  selector: 'es-document',
  templateUrl: './es-document.component.html',
  styleUrls: ['./es-document.component.scss']
})
@EsInitialize
@EsComponentDeps({
  directives: [
    EsInputComponent
  ]
})
export class EsDocumentComponent implements OnInit {
  tabs = ['Attachments', 'Information', 'Permissions', 'Log'];
  selected = new FormControl(0);

  constructor() { }

  ngOnInit() { }

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }
  
  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}

// ----------------------------------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EsDocumentComponent
  ],
  providers: [ ],
  exports: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EsDocumentModule { }
