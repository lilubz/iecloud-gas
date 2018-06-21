import { UserStateService } from './userState.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Route,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';
import { RoleType } from '../common/RoleType';

/**
 * 角色权限检查
 * 2018-01-25 16:47:54
 * @author xuwenwu
 * @export
 * @class PermissionGuard
 * @implements {CanActivate}
 */
@Injectable()
export class SystemSetGuard implements CanActivate {

  RoleType = RoleType;
  constructor(
    private router: Router,
    private userStateService: UserStateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  /**
   * 检查用户组织是否有权限方位该路由
   * 2018-01-25 14:53:02
   * @author xuwenwu
   * @param {ActivatedRouteSnapshot} [route]
   * @param {RouterStateSnapshot} [state]
   * @returns {boolean}
   * @memberof AuthGuard
   */
  canActivate(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    const Role = this.userStateService.getUserRoleType();
    const path = route.routeConfig.path;
    if (Role === RoleType.Government) {
      if (path === 'user-search') {
        this.router.navigate(['/system/enterprise-management/account-detail'], { relativeTo: this.activatedRoute })
        return false;
      }
    }
    return true;
  }
}