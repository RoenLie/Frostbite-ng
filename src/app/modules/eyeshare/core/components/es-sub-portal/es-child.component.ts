import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'es-child',
  template: `
  <p>  Just a child component </p>
  `,
  styles:[``]
})
export class EsChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log("Just a child component");
  }
}
