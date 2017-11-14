import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';

import { UserStateService } from './../../../core/userState.service';
import { API } from './../../../core/api';
import { HttpService } from './../../../core/http.service';
@Injectable()
export class CustomerOverviewService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  canActivate() {
    if (this.userStateService.getUser().organizationType === 1) {
      this.router.navigate(['/archive/customer/overview/enterprise', this.userStateService.getUser().organizationId]);
      return false;
    }
    return true;
  }

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
