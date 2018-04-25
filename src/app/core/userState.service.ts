import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { User } from './../model/User.model';
import { RoleType } from '../common/RoleType';
import { OrganizationType } from '../common/OrganizationType';
import { PermissionTable, GovernmentPermissionTable, EnterprisePermissionTable } from '../common/PermissionTable';

/**
 * 用户信息服务
 * 2018-01-24 11:26:53
 * @author hzb
 * @export
 * @class UserStateService
 */
@Injectable()
export class UserStateService {
  private user: User;

  /**
   * 设置用户信息
   * 2018-01-24 11:28:34
   * @author hzb
   * @param {User} user
   * @memberof UserStateService
   */
  setUser(user: User) {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.user = user;
    } else {
      this.user = null;
    }
  }

  /**
   * 获取用户信息
   * 2018-01-24 11:28:51
   * @author hzb
   * @returns {(User | null)}
   * @memberof UserStateService
   */
  getUser(): User | null {
    if (!this.user) {
      const user = sessionStorage.getItem('user');
      if (user !== 'undefined' && user !== 'null' && user !== '') {
        this.user = JSON.parse(user);
      } else {
        this.user = null;
      }
    }
    return this.user || null;
  }

  /**
   * 获取用户角色类型
   * 2018-01-24 11:29:14
   * @author hzb
   * @returns {(RoleType | null)}
   * @memberof UserStateService
   */
  getUserRoleType(): RoleType | null {
    if (this.getUser()) {
      if (this.getUser().roleId === 4) {
        return RoleType.Admin;
      }
      switch (this.getUser().roleType) {
        case 1:
          return RoleType.Government;

        case 2:
          return RoleType.Enterprise;

        default:
          return null;
      }
    }
    return null;
  }

  /**
   * 获取用户组织类型
   * 2018-02-12 20:01:24
   * @author hzb
   * @returns {(OrganizationType | null)}
   * @memberof UserStateService
   */
  getUserOrganizationType(): OrganizationType | null {
    if (this.getUser()) {
      switch (this.getUser().organizationType) {
        case 4:
          return OrganizationType.Government;

        case 1:
          return OrganizationType.Enterprise;

        default:
          return null;
      }
    }
    return null;
  }

  /**
   * 获取用户权限列表信息
   * 2018-04-08 10:59:20
   * @author hzb
   * @returns {PermissionTable}
   * @memberof UserStateService
   */
  getUserPermissions(): PermissionTable {
    if (this.getUser()) {
      switch (this.getUser().organizationType) {
        case 4:
          return GovernmentPermissionTable;

        case 1:
          return EnterprisePermissionTable;

        default:
          return;
      }
    }
  }
}
