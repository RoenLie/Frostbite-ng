import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ----------------------------------------------------------------------------


@Component({
  selector: 'es-input',
  templateUrl: './es-input.component.html',
  styleUrls: ['./es-input.component.scss']
})
export class EsInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// ----------------------------------------------------------------------------

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    EsInputComponent
  ],
  providers: [ ],
  exports: [ ]
})
export class EsInputModule { }
