import { Injectable } from '@angular/core';

import { Layout } from "./layout";
import { DefaultComponent } from "./default/default.component";
import { EnigmaComponent } from "./enigma/enigma.component";


@Injectable()
export class LayoutService {

  getLayouts() {
    return {
      default: new Layout(DefaultComponent, { name: "default layout" }),
      enigma: new Layout(EnigmaComponent, { name: "enigma layout" })
    }
  }
}
