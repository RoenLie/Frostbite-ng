import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

export type Menu = MenuGroup[];

export interface MenuGroup {
  options?: MenuOptions,
  menuItems?: MenuItem[]
}

export interface MenuOptions {
  order?: number
}

export interface MenuItem {
  displayName: string,
  name: string,
  actionName?: string,
  actionValue?: string,
  menu?: MenuItem[]
}


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public menu: Menu = [];
  private menu$: Subject<MenuGroup> = new Subject<MenuGroup>();

  constructor() {
    this.menu$.subscribe((menuGroup: MenuGroup) => {
      this.menu.push(menuGroup);
      this.menu.sort((a: MenuGroup, b: MenuGroup) =>
        (a?.options?.order || Number.MAX_SAFE_INTEGER) -
        (b?.options?.order || Number.MAX_SAFE_INTEGER));
    });
  }
  
  add(menuGroup: MenuGroup) {
    this.menu$.next(menuGroup);
  }
}
