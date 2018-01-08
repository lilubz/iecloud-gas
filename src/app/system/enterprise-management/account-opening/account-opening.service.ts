import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../core/api';

@Injectable()
export class AccountOpeningService {
  constructor(private httpService: HttpService) { }

  getEnterpriseList(params: any): Promise<any> {
    return this.httpService.getRequest(API.getDropdownForCorpInfoInRegion, params);
  }

  addEnterpriseUser(params: any): Promise<any> {
    return this.httpService.formDataPostRequest(API.addSystemCorpUser, params);
  }
}
