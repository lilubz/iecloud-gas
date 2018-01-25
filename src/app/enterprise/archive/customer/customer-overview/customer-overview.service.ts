import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';

import { UserStateService } from './../../../../core/userState.service';
import { API } from './../../../../common/api';
import { HttpService } from './../../../../core/http.service';
@Injectable()
export class CustomerOverviewService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  getCountiesOverview(params: any): Promise<any> {
    return this.httpService
      .getRequest(API.getCustomerCountiesOverview, params);
  }

  getEnterprisesOverviewByReginId(params: any): Promise<any> {
    return this.httpService
      .getRequest(API.getCustomerEnterpriseOverviewByAreaId, params);
  }

  getEnterprisesOverviewByOrganizationId(params: any): Promise<any> {
    return this.httpService
      .getRequest(API.getCustomerEnterpriseOverviewByOrganizationId, params);
  }
}
