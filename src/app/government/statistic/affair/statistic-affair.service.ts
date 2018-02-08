import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';

import { UserStateService } from './../../../core/userState.service';
import { API } from './../../../common/api';
import { HttpService } from './../../../core/http.service';

@Injectable()
export class StatisticAffairService {
  // private headers = new Headers({ 'Content-Type': 'multipart/form-data; charser=UTF-8' });

  constructor(
    private httpService: HttpService,
    private userStateService: UserStateService,
    private router: Router
  ) { }

  /**
   * 获取某区域下的执法事务统计
   * 2018-01-18 17:37:04
   * @author hzb
   * @param params
   */
  getAffairStatistic(params: { regionId: string, range: string }): Promise<any> {
    return this.httpService.withCredentialsPostRequest(API.countTransaction, params);
  }
}
