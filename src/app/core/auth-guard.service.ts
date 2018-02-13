import { UserStateService } from './userState.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Route,
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private userStateService: UserStateService
  ) { }

  /**
   * 登录检查
   * 2018-01-25 14:53:02
   * @author hzb
   * @param {ActivatedRouteSnapshot} [route]
   * @param {RouterStateSnapshot} [state]
   * @returns {boolean}
   * @memberof AuthGuard
   */
  canActivate(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    if (!this.userStateService.getUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  /**
   * 子路由登录检查
   * 2018-01-25 15:52:06
   * @author hzb
   * @param {ActivatedRouteSnapshot} [route]
   * @param {RouterStateSnapshot} [state]
   * @returns {boolean}
   * @memberof AuthGuard
   */
  canActivateChild(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    if (!this.userStateService.getUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
