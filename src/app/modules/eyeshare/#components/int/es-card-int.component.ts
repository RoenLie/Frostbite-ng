import { Component } from "@angular/core";
import { EsCardComponent } from "../../core/components/es-card/es-card.component";
// ----------------------------------------------------------------------------


@Component( {
  selector: "es-card",
  templateUrl: "../../core/components/es-card/es-card.component.html",
  styleUrls: [ "../../core/components/es-card/es-card.component.scss" ],
  styles: [ `
    section {
      color: pink;
    }
  `]
} )
export class EsCardComponentInt extends EsCardComponent {

  constructor () {
    super();
    this.header = "Header from int";
    this.content = "Content from int";
    this.footer = "Footer from int";
  }
}


// ----------------------------------------------------------------------------