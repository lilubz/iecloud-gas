import { Injectable, Inject } from '@angular/core';
import { Headers, Http, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { UserStateService } from './../../core/userState.service';

import { HttpService } from './../../core/http.service';
import { API_TOKEN } from './../../core/api';
@Injectable()
export class CylinderTagService {
  private formHeaders = new Headers({ 'Content-Type': 'application/json; charser=UTF-8' });
  constructor(private HttpService: HttpService, @Inject(API_TOKEN) private API,
    private http: Http, private router: Router, private userStateService: UserStateService) { }

  listTagApplication(params: any): Promise<any> {
    return this.HttpService.formPostRequest(this.API.listTagApplication, params);
  }
  getUnboundGcLabelInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getUnboundGcLabelInfo, params);
  }
  getUnboundCylinderInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getUnboundCylinderInfo, params);
  }
  getGcLabelInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getGcLabelInfo, params);
  }
  getGcBasicInfo(params: any): Promise<any> {
    return this.HttpService.formPostRequest(this.API.getGcBasicInfo, params);
  }
  sendTagBinding(params: any): Promise<any> {
    return this.http
      .post(this.API.sendTagBinding, JSON.stringify(params), { headers: this.formHeaders })
      .toPromise()
      .then(res => res.json());
  }
}
