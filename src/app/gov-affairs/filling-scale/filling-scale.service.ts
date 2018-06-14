import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class FillingScaleService {

  constructor(private HttpService: HttpService) { }

  listBalanceInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listBalanceInfo, params);
  }

  getBalanceStatus(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getBalanceStatus, params);
  }

  listBalanceLockRecord(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listBalanceLockRecord, params);
  }

  setRuleForCheckGcValid(params?: any): Promise<any> {
    return this.HttpService.withCredentialsPostRequest(API.setRuleForCheckGcValid, params);
  }
  setRuleForCheckFillingCycle(params?: any): Promise<any> {
    return this.HttpService.withCredentialsPostRequest(API.setRuleForCheckFillingCycle, params);
  }
  setRuleForCheckFillingCountOneDay(params?: any): Promise<any> {
    return this.HttpService.withCredentialsPostRequest(API.setRuleForCheckFillingCountOneDay, params);
  }
  setRuleForCheckGcDispatchComplete(params?: any): Promise<any> {
    return this.HttpService.withCredentialsPostRequest(API.setRuleForCheckGcDispatchComplete, params);
  }

  getRuleForFillingSupervise(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getRuleForFillingSupervise, params);
  }

  setBalanceLockStatus(params: {
    balanceId: number,
    boolIsLockBalance: boolean
  }): Promise<any> {
    return this.HttpService.getRequest(API.setBalanceLockStatus, params);
  }

  setBalanceInnerLockStatus(params: {
    balanceId: number,
    boolIsAddInnerLock: boolean
  }): Promise<any> {
    return this.HttpService.getRequest(API.setBalanceInnerLockStatus, params);
  }
}
