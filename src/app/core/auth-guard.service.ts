import { UserStateService } from './userState.service';
import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RoleType } from '../common/RoleType';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userStateService: UserStateService
  ) { }

  canActivate(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    if (!this.userStateService.getUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  canLoad(route: Route): boolean {
    console.log('canLoad');
    if (
      ('enterprise' === route.path && this.userStateService.getUserRoleType() === RoleType.Enterprise) ||
      ('government' === route.path && this.userStateService.getUserRoleType() === RoleType.Government)
    ) {
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
