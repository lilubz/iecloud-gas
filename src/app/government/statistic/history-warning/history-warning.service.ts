import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class HistoryWarningService {

  constructor(private HttpService: HttpService) { }
  listRegionInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listRegionInfo, params);
  }
  listGcThresholdHistoryWarning(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGcThresholdHistoryWarning, params);
  }
  listGcThresholdHistoryWarningDetail(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGcThresholdHistoryWarningDetail, params);
  }
}
