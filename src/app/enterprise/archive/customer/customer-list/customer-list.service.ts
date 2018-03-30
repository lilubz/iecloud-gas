import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API } from './../../../../common/api';
import { HttpService } from './../../../../core/http.service';

@Injectable()
export class CustomerListService {
  API = API;



  constructor(private httpService: HttpService ) { }

  getDropdownForUserType(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForUserType, params);
  }

  getDropdownForRegionSysUser(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForRegionSysUser, params);
  }

  getDropdownForCorpInfoInRegion(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForCorpInfoInRegion, params);
  }

  getCustomerList(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getCustomerList, params);
  }

  deleteCustomer(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.deleteGcUser, params);
  }
  displayCustomer(params: any): Promise<any> {
    return this.httpService
      .formPostRequest(this.API.updateGcUser, params);
  }
}
