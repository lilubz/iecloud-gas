import { UserStateService } from './../../../core/userState.service';
import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import { API } from './../../../common/api';
import { HttpService } from './../../../core/http.service';

@Injectable()
export class CylinderOverviewService implements CanActivate {



  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  canActivate() {
    if (this.userStateService.getUser().organizationType === 1) {
      this.router.navigate(['/archive/cylinder/overview/enterprise', this.userStateService.getUser().organizationId]);
      return false;
    }
    return true;
  }

  getCountiesOverview(params: any): Promise<any> {
    return this.httpService
      .getRequest(API.getCylinderCountiesOverview, params);
  }

  exportCountiesOverview(): Promise<any> {
    return this.httpService
      .getRequest(API.getCylinderCountiesOverview, { resultType: 'excel' });
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
