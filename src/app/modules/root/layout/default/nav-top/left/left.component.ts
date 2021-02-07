import { Component, OnInit } from '@angular/core';
import { environment } from "../../../../../../../environments/environment" 


@Component({
  selector: 'app-nav-top-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  navTitle: string = "Placeholder";

  constructor() { }

  ngOnInit(): void {
    this.navTitle = environment.navTitle;
  }

}
