import { UserStateService } from './../../../../core/userState.service';
import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import { API } from './../../../../common/api';
import { HttpService } from './../../../../core/http.service';

@Injectable()
export class CylinderOverviewService {



  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  getCountiesOverview(params: any): Promise<any> {
    return this.httpService
      .getRequest(API.getCylinderCountiesOverview, params);
  }

  getCylinderEnterpriseOverviewByAreaId(params: any): Promise<any> {
    return this.httpService
      .getRequest(API.getCylinderEnterpriseOverviewByAreaId, params);
  }

  getCylinderEnterpriseOverviewByOrganizationId(params: any): Promise<any> {
    return this.httpService
      .getRequest(API.getCylinderEnterpriseOverviewByOrganizationId, params);
  }
}
