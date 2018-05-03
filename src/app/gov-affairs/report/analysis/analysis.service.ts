import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class AnalysisService {
  constructor(private HttpService: HttpService) { }

  getUrl(params?: any, interfaceName?): Promise<any> {
    return this.HttpService.getRequest(API[interfaceName], params);
  }

}
