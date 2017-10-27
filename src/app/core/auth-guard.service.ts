import { Injectable } from '@angular/core';
import { Router, Route, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (!sessionStorage.getItem('user')) {
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
    if (sessionStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
