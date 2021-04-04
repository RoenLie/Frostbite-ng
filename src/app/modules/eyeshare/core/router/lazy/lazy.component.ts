import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-lazy',
  template:`<div>LAZY COMPONENT</div>`,
  styles: [`
    :host {
      display: grid;
      place-items: center;
    }
  `],
})
export class LazyComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log("LAZY SYS");
  }
}
