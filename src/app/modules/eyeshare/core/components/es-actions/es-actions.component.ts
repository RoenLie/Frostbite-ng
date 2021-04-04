import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
// ----------------------------------------------------------------------------


@Component({
  selector: 'es-actions',
  templateUrl: './es-actions.component.html',
  styleUrls: ['./es-actions.component.scss']
})
export class EsActionsComponent implements OnInit {

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
    EsActionsComponent
  ],
  providers: [ ],
  exports: [ ]
})
export class EsActionsModule { }
