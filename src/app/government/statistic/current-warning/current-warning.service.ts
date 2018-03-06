import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class CurrentWarningService {

  constructor(private HttpService: HttpService) { }

  listRegionInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listRegionInfo, params);
  }
  listGcThresholdCurrentWarning(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGcThresholdCurrentWarning, params);
  }
}
