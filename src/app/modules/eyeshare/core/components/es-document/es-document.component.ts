import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EsComponentDeps, EsInitialize } from '../../helpers/component-decorators';
import { EsCardComponent } from '../es-card/es-card.component';
import { EsInputComponent } from '../es-input/es-input.component';
// ----------------------------------------------------------------------------


@Component({
  selector: 'es-document',
  templateUrl: './es-document.component.html',
  styleUrls: ['./es-document.component.scss']
})
@EsComponentDeps({
  directives: [
    EsInputComponent,
    EsCardComponent
  ]
})
export class EsDocumentComponent implements OnInit {
  document: FormGroup = this.fb.group({
    value: [""]
  });

  tabs = ['Attachments', 'Information', 'Permissions', 'Log'];
  selected = new FormControl(0);

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }
  submitForm() {
    console.log(this.document.get("value"));
  }

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
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    EsDocumentComponent
  ],
  providers: [],
  exports: [EsDocumentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EsDocumentModule { }
