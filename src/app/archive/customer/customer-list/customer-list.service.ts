import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API_TOKEN } from './../../../core/api';
import { HttpService } from './../../../core/http.service';

@Injectable()
export class CustomerListService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API) { }

  getDropdownForUserNature(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForUserNature, params)
      .catch(this.handleError);
  }

  getDropdownForUserType(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForUserType, params)
      .catch(this.handleError);
  }

  getDropdownForRegionSysUser(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForRegionSysUser, params)
      .catch(this.handleError);
  }

  getDropdownForCorpInfoInRegion(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForCorpInfoInRegion, params)
      .catch(this.handleError);
  }

  getCustomerList(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getCustomerList, params)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
