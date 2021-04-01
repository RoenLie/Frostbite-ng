import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'es-portal',
  templateUrl: "./es-portal.component.html",
  styles: [`
    :host {
      display: grid;
      place-items: center;
    }
  `],
})
export class EsPortalComponent implements OnInit {

  message: string = "initial message from portal";
  constructor() { }

  ngOnInit() {
    // console.log("SYS");
    
  }
}
