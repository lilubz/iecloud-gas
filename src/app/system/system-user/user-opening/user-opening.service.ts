import { Injectable, } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class UserOpeningService {
  constructor(private httpService: HttpService) { }

  getGovOrganzations(params: any): Promise<any> {
    return this.httpService.getRequest(API.getGovOrganzations, params);
  }
  getRoles(params: any): Promise<any> {
    return this.httpService.getRequest(API.getRoles, params);
  }
  addUser(params: any): Promise<any> {
    return this.httpService.formPostRequest(API.addUser, params);
  }
}
