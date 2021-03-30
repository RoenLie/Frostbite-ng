import { Component, Input, OnInit } from '@angular/core';
import { EsComponent } from './es-component.decorator';


@EsComponent("hello dis test input")
@Component({
  selector: 'es-sub-portal',
  template: `
  <p>  sub-portal SYS </p>
  <span>{{message}}</span>
  <es-child></es-child>
  `,
  styles:[``]
})
export class EsSubPortalComponent implements OnInit {

  @Input() message: string;

  randomProp: string = "I am just a random prop";
  constructor() { }

  ngOnInit() {
    console.log("sub portal component SYS");
  }
}
