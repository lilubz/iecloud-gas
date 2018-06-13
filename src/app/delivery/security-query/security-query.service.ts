import { Injectable } from '@angular/core';
import { API } from './../../common/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class SecurityQueryService {

  constructor(
    private httpService: HttpService,
  ) { }

  securityCheckInquiries(params): Promise<any> {
    return this.httpService
      .formPostRequest(API.securityCheckInquiries, params);
  }

  listCorpSupplyStation(params?: any): Promise<any> {
    return this.httpService.getRequest(API.listCorpSupplyStationVO, params);
  }

}
