import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class LayoutService {

  constructor(private HttpService: HttpService) { }

  listGcThresholdCurrentWarning(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listGcThresholdCurrentWarning, params);
  }
}
