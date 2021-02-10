import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/root/services/auth.service';
import { DefaultLayoutService } from '../../default.service';

@Component({
  selector: 'app-nav-top-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public defaultLayoutService: DefaultLayoutService
  ) { }

  ngOnInit(): void { }

  login() { this.authService.login(); }
  logout() { this.authService.logout(); }
  isLoggedIn() { return !!this.authService.user; }
}
