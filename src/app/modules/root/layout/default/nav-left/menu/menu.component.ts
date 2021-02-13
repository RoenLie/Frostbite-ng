import {
  Component, Input, OnInit, AfterViewInit,
  ElementRef, ViewChildren, QueryList
} from '@angular/core';
import { MenuGroup, MenuItem } from 'src/app/modules/root/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {
  @Input() menu?: MenuItem[];
  @Input() depth: number = 0;
  @ViewChildren('subMenu') subMenus: QueryList<ElementRef<HTMLElement>>

  nativeElement: Element;

  constructor(private elementRef: ElementRef<Element>) { }

  ngOnInit(): void {
    if (this.depth != 0) this.depth++;
    this.nativeElement = this.elementRef.nativeElement;
  }

  ngAfterViewInit() {
    this.initMenuState();
  }

  initMenuState() {
    const menuEl = this.subMenus.toArray().map(el => el.nativeElement);
    
    if (menuEl.length > 0) {
      const menuStates: any = this.loadSectionSate();
      
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

  action({
    displayName,
    name,
    actionName,
    actionValue,
    menu
  }: MenuItem, index: number) {
    if (menu) {
      const menuEl = this.subMenus.toArray()[index].nativeElement;

      if (menuEl.getAttribute("data-collapsed") === "true") {
        this.expandSection(menuEl);
        this.saveSectionState(name);
      } else {
        this.collapseSection(menuEl);
        this.saveSectionState(name);
      }
    }
    if (name == "route") {
      // if (value.params) value.params.timestamp = Date.now();
      // router.push(value);

      // nav.methods.closeLeftNavigation();
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
  
  loadSectionSate () {
    let navMenuState: any = localStorage.getItem("navMenuState");
  
    if (!navMenuState) navMenuState = {};
    else navMenuState = JSON.parse(navMenuState);
  
    return navMenuState;
  }

}
