import { Component, OnInit } from '@angular/core';
import { DefaultLayoutService } from '../default.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent implements OnInit {

  constructor(public defaultLayoutService: DefaultLayoutService) { }

  ngOnInit(): void {
  }

}
