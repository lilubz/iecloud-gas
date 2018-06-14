import { Injectable, } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class SupplyStionService {
  constructor(private httpService: HttpService) { }
  getCylinderSearchOpt(params: any): Promise<any> {
    return this.httpService
      .formPostRequest(API.cylinderSelectOpt, params);
  }
  getDropdownForCorpInfoInRegion(params: any): Promise<any> {
    return this.httpService.getRequest(API.getDropdownForCorpInfoInRegion, params);
  }

  onsearch(params: any): Promise<any> {
    return this.httpService.getRequest(API.getCorpSupplyStation, params);
  }
  addCorpSupplyStation(params: any): Promise<any> {
    return this.httpService.formPostRequest(API.addCorpSupplyStation, params);
  }
  updateCorpSupplyStation(params: any): Promise<any> {
    return this.httpService.formPostRequest(API.updateCorpSupplyStation, params);
  }
  createAccount(params: any): Promise<any> {
    return this.httpService.getRequest(API.createAccount, params);
  }
  freezeAccount(params: any): Promise<any> {
    return this.httpService.getRequest(API.freezeAccount, params);
  }
  deleteCorpSupplyStation(params: any): Promise<any> {
    return this.httpService.getRequest(API.deleteCorpSupplyStation, params);
  }
  updateTheEnterpriseOfCorpSupplyStation(params: any): Promise<any> {
    return this.httpService.formPostRequest(API.updateTheEnterpriseOfCorpSupplyStation, params);
  }

  getSupplyStationDetailInfo(params: any): Promise<any> {
    return this.httpService.getRequest(API.getSupplyStationDetailInfo, params);
  }
}
