import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserStateService } from './../core/userState.service';
import { API } from './../core/api';
import { HttpService } from './../core/http.service';

@Injectable()
export class CommonRequestService {

  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  /**
   * 获取当前用户可查看的区域
   * 2017-11-20 16:35:36
   * @author hzb
   * @returns {Promise<{
   *     status: number,
   *     msg: string,
   *     data: Array<{
   *       regionId: number,
   *       regionName: string
   *     }>
   *   }>}
   */
  getRegions(): Promise<{
    status: number,
    msg: string,
    data: Array<{
      regionId: number,
      regionName: string
    }>
  }> {
    return this.httpService.getRequest(API.getDropdownForRegionSysUser, null);
  }

  /**
   * 获取温州市行政列表
   * 2017-11-20 16:39:06
   * @author hzb
   * @returns {Promise<any>}
   */
  getWenZhouRegionList(params: { regionId: string }): Promise<any> {
    return this.httpService.getRequest(API.getWenZhouRegionList, params);
  }

  /**
   * 获取客户类型
   * 2017-11-20 16:36:36
   * @author hzb
   * @returns {Promise<any>}
   */
  getUserType(): Promise<any> {
    return this.httpService.getRequest(API.getDropdownForUserType, null);
  }

  /**
   * 获取客户类型
   * 2017-11-21 10:42:40
   * @author hzb
   * @returns {Promise<{
   *     status: number,
   *     msg: string,
   *     data: Array<{
   *       userTypeId: number,
   *       name: string
   *     }>,
   *   }>}
   */
  getCylinderTypes(): Promise<{
    status: number,
    msg: string,
    data: Array<{
      userTypeId: number,
      name: string
    }>,
  }> {
    return this.httpService.getRequest(API.getCylinderTypes, null);
  }


  /**
   * 获取气瓶规格
   * 2017-11-21 11:33:08
   * @author hzb
   * @returns {Promise<{
   *     status: number,
   *     msg: string,
   *     data: Array<{
   *       specificationId: string
   *     }>,
   *   }>}
   */
  getCylinderSpecification(): Promise<{
    status: number,
    msg: string,
    data: Array<{
      specificationId: string
    }>,
  }> {
    return this.httpService.getRequest(API.getCylinderSpecification, null);
  }

  getLiabilitySubjectType(): Promise<{
    status: number,
    msg: string,
    data: Array<{
      liabilityTypeId: number,
      liabilityName: string
    }>,
  }> {
    return this.httpService.getRequest(API.listLiabilitySubjectType, null);
  }

}
