import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserStateService } from './../../core/userState.service';
import { API } from './../../core/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class UserCardService {
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }

  applyCard(params: File): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getCylinderCountiesOverview, params);
  }
  getUnbindCustomerList(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getCylinderCountiesOverview, params);
  }
  getUnbindCardList(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getCylinderCountiesOverview, params);
  }
  getGasSite(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getCylinderCountiesOverview, params);
  }
  bindCustomerAndCard(params): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.getCylinderCountiesOverview, params);
  }

}
