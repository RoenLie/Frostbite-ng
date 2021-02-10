import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '../default.service';
import { environment } from "src/environments/environment" 

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  navTitle: string = "Placeholder";

  constructor(public defaultLayoutService: DefaultLayoutService) { }

  ngOnInit(): void {
    this.navTitle = environment.navTitle;
  }

}
