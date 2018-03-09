import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class CylinderWarningService {

  constructor(private HttpService: HttpService) { }
  listRegionInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listRegionInfo, params);
  }
  listGcThreshold(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGcThreshold, params);
  }
  addGcThreshold(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(API.addGcThreshold, params);
  }
}
