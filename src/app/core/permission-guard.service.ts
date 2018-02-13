import { UserStateService } from './userState.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Route,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { OrganizationType } from '../common/OrganizationType';

/**
 * 角色权限检查
 * 2018-01-25 16:47:54
 * @author hzb
 * @export
 * @class PermissionGuard
 * @implements {CanActivate}
 */
@Injectable()
export class PermissionGuard implements CanActivate {

  constructor(
    private router: Router,
    private userStateService: UserStateService
  ) { }

  /**
   * 检查用户组织是否有权限方位该路由
   * 2018-01-25 14:53:02
   * @author hzb
   * @param {ActivatedRouteSnapshot} [route]
   * @param {RouterStateSnapshot} [state]
   * @returns {boolean}
   * @memberof AuthGuard
   */
  canActivate(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    const organizationType = this.userStateService.getUserOrganizationType();
    const path = state.url.split('/')[1];
    if (
      ('enterprise' === path && organizationType === OrganizationType.Enterprise) ||
      ('government' === path && organizationType === OrganizationType.Government)
    ) {
      return true;
    }
    return false;
    // return true;
  }
}
