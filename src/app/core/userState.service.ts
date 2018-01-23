import { Injectable } from '@angular/core';
import { Headers, Http, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { User } from './../model/User.model';
import { RoleType } from './RoleType';
@Injectable()
export class UserStateService {
  private user: User;

  setUser(user: User) {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
      this.user = user;
    } else {
      this.user = null;
    }
  }
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

  getUserRoleType(): RoleType | null {
    if (this.getUser()) {
      if (this.getUser().roleType === 1) {
        return RoleType.Government;
      } else if (this.getUser().roleType === 2) {
        return RoleType.Enterprise;
      }
    }
    return null;
  }
}
