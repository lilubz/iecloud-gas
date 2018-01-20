import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../core/api';

@Injectable()
export class CylinderTraceService {
  constructor(private HttpService: HttpService) { }

  getCylinderByStatus(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGasInfoSearchByLiabilitySubjectId, params);
  }

  getCylinderHistoryStatus(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGasStatusChangeByTime, params);
  }

  getCylinderHistoryByDispatcher(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getDispachterDistributions, params);
  }

  listGasReceiveAndDispatch(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGasReceiveAndDispatch, params);
  }

  listFillingInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listFillingInfo, params);
  }

  listGcSendOrReceive(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGcSendOrReceive, params);
  }
}
