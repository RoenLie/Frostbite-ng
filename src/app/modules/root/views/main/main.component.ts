import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.add({
      options: {
        order: 5,
      },
      menuItems: [
        {
          displayName: "404",
          name: "404",
          actionName: "route",
          actionValue: "404"
        }
      ]
    })
    this.menuService.add({
      options: {
        order: 2,
      },
      menuItems: [
        {
          displayName: "Main",
          name: "main",
          actionName: "route",
          actionValue: "main"
        }
      ]
    })
  }

  isLoggedIn() { return !!this.authService.user; }

}
