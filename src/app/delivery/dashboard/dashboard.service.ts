import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';

import { UserStateService } from './../../core/userState.service';
import { API } from './../../core/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class DashboardService {
  private headers = new Headers({ 'Content-Type': 'application/json; charser=UTF-8' });

  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  addOrder(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.addOrder, params);
  }
  getDispatcher(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getDispatcher, params);
  }
  dispatchOrder(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.dispatchOrder, params);
  }
  getCustomerByPhone(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getCustomerByPhone, params);
  }
  getNoDispatchOrder(params): Promise<any> {
    return this.httpService
      .getRequest(API.getProcessingOrder, params);
  }

}
