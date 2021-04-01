import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'es-sub-portal',
  template: `
  <p>  sub-portal CUSTOM </p>
  <span>{{message}}</span>
  <!-- <es-child></es-child> -->
  `,
  styles: [``]
})
export class EsSubPortalComponentCus implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
    console.log("sub portal component CUS");
  }
}
