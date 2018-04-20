import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API } from './../../common/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class SafetyCheckService {
  API = API;
  constructor(private httpService: HttpService) { }

  listRegionInfo(params: any): Promise<any> {
    return this.httpService.getRequest(this.API.listRegionInfo, params);
  }

  checkResults(params: any): Promise<any> {
    return this.httpService.getRequest(this.API.checkResults, params);
  }
}
