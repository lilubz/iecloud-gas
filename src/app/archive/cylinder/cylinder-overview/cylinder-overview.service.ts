import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API_TOKEN } from './../../../core/api';
import { HttpService } from './../../../core/http.service';

@Injectable()
export class CylinderOverviewService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API) { }

  getCountiesOverview(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinderCountiesOverview, params)
      .catch(this.handleError);
  }

  getEnterprisesOverview(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinderEnterpriseOverview, params)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
