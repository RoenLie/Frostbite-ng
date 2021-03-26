import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'es-document',
  templateUrl: './es-document.component.html',
  styleUrls: ['./es-document.component.scss']
})
export class EsDocumentComponent implements OnInit {
  tabs = ['Attachments', 'Information', 'Permissions', 'Log'];
  selected = new FormControl(0);

  
  constructor() { }

  ngOnInit(): void {
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
