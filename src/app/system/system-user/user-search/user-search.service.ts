import { Injectable, } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class UserSearchService {
  constructor(private httpService: HttpService) { }

  getGovOrganzations(params: any): Promise<any> {
    return this.httpService.getRequest(API.getGovOrganzations, params);
  }
  getRoles(params: any): Promise<any> {
    return this.httpService.getRequest(API.getRoles, params);
  }
  getGovSysUsers(params: any): Promise<any> {
    return this.httpService.getRequest(API.getGovSysUsers, params);
  }
  freezeAccount(params: any): Promise<any> {
    return this.httpService.getRequest(API.changefreeze, params);
  }
}
