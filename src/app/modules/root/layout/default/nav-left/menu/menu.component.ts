import {
  Component, Input, OnInit, AfterViewInit,
  ElementRef, ViewChildren, QueryList
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuGroup, MenuItem } from 'src/app/modules/root/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() menu?: MenuItem[];
  @Input() depth: number = 0;
  @ViewChildren('subMenu') subMenus: QueryList<ElementRef<HTMLElement>>

  toggleStates: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.depth != 0) this.depth++;

    const menuStates: any = this.loadSectionState();

    for (const key in menuStates) {
      this.toggleStates[key] = menuStates[key];
    }
  }

  ngAfterViewInit() {
    this.initMenuState();
  }

  initMenuState() {
    const menuEl = this.subMenus.toArray().map(el => el.nativeElement);
    
    if (menuEl.length > 0) {
      const menuStates: any = this.loadSectionState();
      
      menuEl.forEach(el => {
        const menuName: any = el.getAttribute("data-menu-name");
        const state = menuStates[menuName];

        if (state) {
          if (state == true) {
            el.style.height = "auto";
            el.setAttribute("data-collapsed", "false");
          } else {
            el.style.height = "0px";
            el.setAttribute("data-collapsed", "true");
          }
        } else {
          el.style.height = "0px";
          el.setAttribute("data-collapsed", "true");
        }
      });
    }
  }

  toggleMenu({
    displayName,
    name,
    actionName,
    actionValue,
    menu
  }: MenuItem, index: number) {
    const menuEl = this.subMenus.toArray()[index].nativeElement;

    if (menuEl.getAttribute("data-collapsed") === "true") {
      this.expandSection(menuEl);
      this.saveSectionState(name);

      this.toggleStates[name] = true;
    } else {
      this.collapseSection(menuEl);
      this.saveSectionState(name);

      this.toggleStates[name] = false;
    }
  }

  action(
    { route, routeParams, routeQuery }: MenuItem,
    index: number
  ) {
    if (route === undefined) return;

    if (route === "") {
      this.router.navigate([route]);
    } else {
      this.router.navigate([route, routeParams || {}],
        { queryParams: routeQuery });
    }
  }

  collapseSection (el: HTMLElement) {
    const sectionHeight = el.scrollHeight;
  
    const sectionTransition = el.style.transition;
    el.style.transition = "";
  
    requestAnimationFrame(() => {
      el.style.height = sectionHeight + "px";
      el.style.transition = sectionTransition;
  
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
    });

    el.setAttribute("data-collapsed", "true");
  }
  
  expandSection (el: HTMLElement) {
    const sectionHeight = el.scrollHeight;
  
    el.style.height = sectionHeight + "px";
  
    el.ontransitionend = () => {
      el.style.height = "auto";
      el.ontransitionend = null;
    };

    el.setAttribute("data-collapsed", "false");
  }
  
  saveSectionState (sectionName: string) {
    let navMenuState: any = localStorage.getItem("navMenuState");
  
    if (!navMenuState) navMenuState = {};
    else navMenuState = JSON.parse(navMenuState);
  
    if (navMenuState[sectionName]) {
      navMenuState[sectionName] = !navMenuState[sectionName];
    } else {
      navMenuState[sectionName] = true;
    }
  
    localStorage.setItem("navMenuState", JSON.stringify(navMenuState));
  }
  
  loadSectionState () {
    let navMenuState: any = localStorage.getItem("navMenuState");
  
    if (!navMenuState) navMenuState = {};
    else navMenuState = JSON.parse(navMenuState);
  
    return navMenuState;
  }

}
