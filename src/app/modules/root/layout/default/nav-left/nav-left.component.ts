import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { DefaultLayoutService } from '../default.service';
import { environment } from "src/environments/environment" 
import { MenuService, Menu } from '../../../services/menu.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  navTitle: string = "Placeholder";
  menu: Menu;

  constructor(
    public defaultLayoutService: DefaultLayoutService,
    public menuService: MenuService,
    private elementRef: ElementRef<Element>
  ) {
    this.menu = this.menuService.menu;
  }

  ngOnInit(): void {
    this.navTitle = environment.navTitle;
  }

  @HostListener("window:touchstart", ["$event"])
  @HostListener("window:mousedown", ["$event"])
  onClick(event: Event) {
    const { nativeElement } = this.elementRef;

    const target = event.target as Element;

    const path = event.composedPath() as Element[];

    const validClick = path.some((el: Element) => !!(el == nativeElement));
    
    if (!validClick) this.defaultLayoutService.navigationLeftOpen = false;
  }

}
