import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IAuthService<T>{
  user: T;

  constructor() { }

  login(): void { }

  logout(): void {}

  isLoggedIn = (): boolean => true || false;

  authenticate = async (): Promise<boolean> => false;
}