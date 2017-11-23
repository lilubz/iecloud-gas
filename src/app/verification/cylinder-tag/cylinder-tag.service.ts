import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserStateService } from './../../core/userState.service';
import { API_TOKEN } from './../../core/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class CylinderTagService {
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API,
    private userStateService: UserStateService, private router: Router) { }


  getRegionInfo(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForRegionSysUser, params);
  }
  getGcLabelNumApply(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getGcLabelNumApply, params);
  }
  sendGcLabelApply(params: any): Promise<any> {
    return this.httpService
      .formPostRequest(this.API.sendGcLabelApply, params);
  }
}
