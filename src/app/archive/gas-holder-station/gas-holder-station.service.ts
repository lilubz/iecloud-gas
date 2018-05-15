import { Injectable, } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class GsaHolderStationService {
  constructor(private httpService: HttpService) { }
  getCylinderSearchOpt(params: any): Promise<any> {
    return this.httpService
      .formPostRequest(API.cylinderSelectOpt, params);
  }
  getDropdownForCorpInfoInRegion(params: any): Promise<any> {
    return this.httpService.getRequest(API.getDropdownForCorpInfoInRegion, params);
  }

  onsearch(params: any): Promise<any> {
    return this.httpService.getRequest(API.listCorpInflatableStations, params);
  }
  addCorpSupplyStation(params: any): Promise<any> {
    return this.httpService.formDataPostRequest(API.addInflatableStation, params);
  }
  updateCorpSupplyStation(params: any): Promise<any> {
    return this.httpService.formDataPostRequest(API.updateCorpSupplyStation, params);
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
  updateCorpInflatableStation(params: any): Promise<any> {
    return this.httpService.formPostRequest(API.updateCorpInflatableStation, params);
  }
}
