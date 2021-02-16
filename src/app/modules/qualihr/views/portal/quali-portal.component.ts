import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/root/services/auth.service';

@Component({
  selector: 'app-quali-portal',
  templateUrl: './quali-portal.component.html',
  styleUrls: ['./quali-portal.component.scss'],
})
export class QualiPortalComponent implements OnInit {
  loggedIn: BehaviorSubject<boolean>;

  constructor(public authService: AuthService) { }

  ngOnInit(): void { }
}
