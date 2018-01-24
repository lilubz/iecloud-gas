import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserInfoService } from './user-info.service';
@Injectable()
export class UserInfoResolverService implements Resolve<any> {

  constructor(private userInfoService: UserInfoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any[]> {
    return this.userInfoService.getUserType().then(data => {
      if (data.status === 0) {
        return data.data;
      }
      return [];
    });
  }
}
