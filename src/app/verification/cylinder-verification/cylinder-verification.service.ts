import {
  Injectable, Inject
} from '@angular/core';
import { Headers } from '@angular/http';
import {
  HttpService
} from './../../core/http.service';
import { API_TOKEN } from './../../core/api';
@Injectable()
export class CylinderVerificationService {
  constructor(private HttpService: HttpService, @Inject(API_TOKEN) private API) { }

  getListRegionInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.listRegionInfo, params)
      .catch(this.handleError);
  }
  getGcCountRecentlyRegister(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getGcCountRecentlyRegister, params)
      .catch(this.handleError);
  }
  getlistGcInfoRecentlyRegister(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.listGcInfoRecentlyRegister, params)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
