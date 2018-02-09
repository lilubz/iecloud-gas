import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserStateService } from './../core/userState.service';
import { HttpService } from './../core/http.service';
import { API } from '../common/api';

@Injectable()
export class CommonRequestService {

  constructor(
    private httpService: HttpService,
    private userStateService: UserStateService,
    private router: Router
  ) { }

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

  /**
   * 获取该企业下的所有配送工信息
   * 2017-12-29 09:57:41
   * @author hzb
   * @param params
   * @returns
   */
  getDispatchers(): Promise<any> {
    return this.httpService.getRequest(API.getDispatchers, {});
  }

  /**
   * 获取瓶库列表
   * 2018-01-08 20:50:42
   * @author hzb
   * @param params
   * @returns
   */
  listCorpSupplyStation(): Promise<any> {
    return this.httpService.getRequest(API.listCorpSupplyStationVO, {});
  }

  /**
   * 获取储配站列表
   * 2018-01-19 16:44:25
   * @author hzb
   * @param params
   * @returns
   */
  listCorpInflatableStation(): Promise<any> {
    return this.httpService.getRequest(API.listCorpInflatableStation, {});
  }

  /**
   * 查询送气工信息
   * 2018-02-02 17:44:44
   * @author hzb
   * @param {*} [params]
   * @returns {Promise<any>}
   * @memberof CommonRequestService
   */
  getDispatcherInfo(params?: any): Promise<any> {
    return this.httpService.getRequest(API.getDispatcherInfo, params);
  }

  /**
   * 获取所有的移动或固定瓶库
   * 2018-02-09 17:25:50
   * @author hzb
   * @returns
   * @memberof CommonRequestService
   */
  listMobileCorpSupplyStationInfo() {
    return this.httpService.getRequest(API.listMobileCorpSupplyStationInfoVO, {});
  }
}
