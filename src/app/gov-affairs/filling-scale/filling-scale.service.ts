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
  setRuleForFillingSupervise(params?: any): Promise<any> {
    return this.HttpService.withCredentialsPostRequest(API.setRuleForFillingSupervise, params);
  }
  getRuleForFillingSupervise(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getRuleForFillingSupervise, params);
  }
}
