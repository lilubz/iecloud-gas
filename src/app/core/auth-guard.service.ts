import { UserStateService } from './userState.service';
import { Injectable } from '@angular/core';
import { Router, Route, CanActivate } from '@angular/router';
import { RoleType } from './RoleType';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userStateService: UserStateService
  ) { }

  canActivate(): boolean {
    if (!this.userStateService.getUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  canLoad(roleType: RoleType): boolean {
    if (this.userStateService.getUserRoleType() === roleType) {
      return this.canActivate();
    }

    return false;
  }

  checkLogin(url): boolean {
    if (this.userStateService.getUser()) {
      return true;
    }
    return false;
  }
}
