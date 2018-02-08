import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { CanActivate, Router } from '@angular/router';
import { API } from '../../../common/api';
import { HttpService } from '../../../core/http.service';
import { UserStateService } from '../../../core/userState.service';
@Injectable()
export class CylinderOverviewService {



  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  // 企业
  getBusinessOverview(params?: any): Promise<any> {
    return this.httpService
      .getRequest(API.BusinessInformation, params);
  }
}
