import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../core/api';

@Injectable()
export class CylinderTraceService {
  constructor(private HttpService: HttpService) { }

  getCylinderByStatus(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getCylinderByStatus, params);
  }
  getCylinderHistoryStatus(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getCylinderHistoryStatus, params);
  }
}
