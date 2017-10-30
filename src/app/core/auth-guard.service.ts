import { UserStateService } from './userState.service';
import { Injectable } from '@angular/core';
import { Router, Route, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userStateService: UserStateService) { }

  canActivate() {
    if (!this.userStateService.getUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url): boolean {
    if (this.userStateService.getUser()) {
      return true;
    }
    return false;
  }
}
