import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';

import { UserStateService } from './../../../core/userState.service';
import { API } from './../../../common/api';
import { HttpService } from './../../../core/http.service';
import { Customer } from './Customer.model';
@Injectable()
export class UserInfoService {
  // private headers = new Headers({ 'Content-Type': 'multipart/form-data; charser=UTF-8' });

  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  /**
   *
   *
   * @author hzb
   * @param {*} params
   * @returns {Promise<any>}
   */
  addCustomer(params: any): Promise<any> {
    return this.httpService
      .formDataPostRequest(API.addCustomer, params);
  }

  // 上传客户文件
  uploadCustomerFile(params: File): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getCylinderCountiesOverview, params);
  }

  // 获取客户类型列表
  getUserType(): Promise<any> {
    return this.httpService.getRequest(API.getDropdownForUserType, null);
  }

  // 通过区县id获取街道列表
  getStreetsByRegionId(params): Promise<any> {
    return this.httpService.getRequest(API.getDropdownForRegionSysUser, null);
  }

}
