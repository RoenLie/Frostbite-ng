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
  ) { }

  ngOnInit(): void { }

  isLoggedIn() { return !!this.authService.user; }

}
