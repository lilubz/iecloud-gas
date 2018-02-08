import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API } from './../../../../common/api';
import { HttpService } from './../../../../core/http.service';

@Injectable()
export class CustomerListService {
  API = API;



  constructor(private httpService: HttpService ) { }

  getDropdownForUserNature(params: any): Promise<any> {
    return this.httpService
      .getRequest(this.API.getDropdownForUserNature, params);
  }

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
}
