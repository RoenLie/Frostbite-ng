import { Component } from "@angular/core";
import { EsCardComponent } from "../../core/components/es-card/es-card.component";
// ----------------------------------------------------------------------------


@Component( {
  selector: "es-card",
  templateUrl: "../../core/components/es-card/es-card.component.html",
  styleUrls: [ "../../core/components/es-card/es-card.component.scss" ],
  styles: [ `
    section {
      color: maroon;
    }
  `]
} )
export class EsCardComponentCus extends EsCardComponent {

  constructor () {
    super();
    this.header = "Header from Custom";
    this.content = "Content from Custom";
    this.footer = "Footer from Custom";
  }
}


// ----------------------------------------------------------------------------