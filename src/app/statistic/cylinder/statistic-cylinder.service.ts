import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';

import { UserStateService } from './../../core/userState.service';
import { API } from './../../common/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class StatisticCylinderService {
  // private headers = new Headers({ 'Content-Type': 'multipart/form-data; charser=UTF-8' });

  constructor(
    private httpService: HttpService,
    private userStateService: UserStateService,
    private router: Router
  ) { }

  /**
   * 获取所在区域下属于【储配站】的气瓶的统计信息
   * 2018-01-18 12:04:04
   * @author hzb
   * @param params
   * @returns
   */
  getStorageDistributionCount = (params?: { resultType?: string }): Promise<any> => {
    return this.httpService
      .getRequest(API.inflatableStationHas, params);
  }

  /**
   * 获取供应站气瓶统计
   * 2018-01-18 12:04:04
   * @author hzb
   * @param params
   * @returns
   */
  getCylinderStorageCount = (params?: { resultType?: string }): Promise<any> => {
    return this.httpService
      .getRequest(API.supplyStationHas, params);
  }

  /**
   * 获取配送工气瓶统计
   * 2018-01-18 12:04:04
   * @author hzb
   * @param params
   * @returns
   */
  getDispatcherCylinderCount = (params?: { resultType?: string }): Promise<any> => {
    return this.httpService
      .getRequest(API.dispatcherHas, params);
  }

  /**
   * 获取客户气瓶统计
   * 2018-01-18 12:04:04
   * @author hzb
   * @param params
   * @returns
   */
  getCustomerCylinderCount = (params?: { resultType?: string }): Promise<any> => {
    return this.httpService
      .getRequest(API.gcUserHas, params);
  }

  /**
   * 获取储配站气瓶流通统计
   * 2018-01-18 17:37:04
   * @author hzb
   * @param params
   */
  getStorageDistributionCirculation(params: { startTime: string, endTime: string, resultType?: string }): Promise<any> {
    return this.httpService.getRequest(API.inflatableStationSendAndReceiveCount, params);
  }

  /**
   * 获取供应站气瓶流通统计
   * 2018-01-18 17:37:04
   * @author hzb
   * @param params
   */
  getCylinderStorageCirculation(params: { startTime: string, endTime: string, resultType?: string }): Promise<any> {
    return this.httpService.getRequest(API.supplyStationSendAndReceiveCount, params);
  }

  /**
   * 获取某区域下的【送气工】最近的【配送】统计信息
   * 2018-01-18 17:37:04
   * @author hzb
   * @param params
   */
  getDeliveryStatistic(params: { regionId: string, range: string, resultType?: string }): Promise<any> {
    return this.httpService.getRequest(API.dispatcherStatisyical, params);
  }

  listGcNewAddCount(params: { type: string, regionId?: string, beginTime: string, endTime: string, resultType?: string }): Promise<any> {
    return this.httpService.getRequest(API.listGcNewAddCount, params);
  }

  /**
   * 送气工收发重瓶，空瓶数量
   */
  dispatcherSendAndReceiveCount(params: { startTime: string, endTime: string, enterpriseNumber: string, resultType?: string }): Promise<any> {
    return this.httpService.getRequest(API.dispatcherSendAndReceiveCount, params);
  }
  /**
   * 查看某个企业下送气工收发重瓶空瓶的情况
   */
  corpDispatcherSendAndReceiveList = (params: { startTime: string, endTime: string, regionId: string, resultType?: string }): Promise<any> => {
    return this.httpService.getRequest(API.corpDispatcherSendAndReceiveList, params);
  }

  /**
   * 查询储配站拥有的气瓶详细列表
   */
  listGasCylinderBySupplyStationNumber(params): Promise<any> {
    return this.httpService.getRequest(API.listGasCylinderBySupplyStationNumber, params);
  }
}
