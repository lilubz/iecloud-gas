import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from './../../core/http.service';
import { API } from './../../common/api';
@Injectable()
export class DispatcherService {
  API = API;
  constructor(private HttpService: HttpService) { }

  getDropdownForCorpInfoInRegion(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getDropdownForCorpInfoInRegion, params);
  }

  getDispatcherInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getDispatcherInfo, params);
  }

  getDispatcherDetailInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getDispatcherDetailInfo, params);
  }

  resetPassword(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(this.API.resetPassword, params);
  }
}
