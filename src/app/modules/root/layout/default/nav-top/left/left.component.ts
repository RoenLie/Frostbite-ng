import { Component, OnInit } from '@angular/core';
import { environment } from "src/environments/environment" 
import { DefaultLayoutService } from '../../default.service';


@Component({
  selector: 'app-nav-top-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  navTitle: string = "Placeholder";

  constructor(public defaultLayoutService: DefaultLayoutService) { }

  ngOnInit(): void {
    this.navTitle = environment.navTitle;
  }
}
