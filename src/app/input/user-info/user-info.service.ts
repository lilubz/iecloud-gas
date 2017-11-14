import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { UserStateService } from './../../core/userState.service';
import { API_TOKEN } from './../../core/api';
import { HttpService } from './../../core/http.service';
import { Customer } from './Customer.model';
@Injectable()
export class UserInfoService {
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API,
    private userStateService: UserStateService, private router: Router) { }

  addCustomer(params: Customer): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinderCountiesOverview, params);
  }

  uploadCustomerFile(params: File): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinderCountiesOverview, params);
  }
}
