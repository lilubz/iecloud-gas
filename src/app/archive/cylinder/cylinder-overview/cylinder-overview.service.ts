import { UserStateService } from './../../../core/userState.service';
import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import { API_TOKEN } from './../../../core/api';
import { HttpService } from './../../../core/http.service';

@Injectable()
export class CylinderOverviewService implements CanActivate {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API,
    private userStateService: UserStateService, private router: Router) { }

  canActivate() {
    if (this.userStateService.getUser().organizationType === 1) {
      this.router.navigate(['/archive/cylinder/overview/enterprise', this.userStateService.getUser().organizationId]);
      return false;
    }
    return true;
  }

  getCountiesOverview(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinderCountiesOverview, params)
      .catch(this.handleError);
  }

  getCylinderEnterpriseOverviewByAreaId(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinderEnterpriseOverviewByAreaId, params)
      .catch(this.handleError);
  }

  getCylinderEnterpriseOverviewByOrganizationId(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinderEnterpriseOverviewByOrganizationId, params)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
