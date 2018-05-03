import { Injectable, } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class BottleLibraryService {
  constructor(private httpService: HttpService) { }
  getCylinderSearchOpt(params: any): Promise<any> {
    return this.httpService
      .formPostRequest(API.cylinderSelectOpt, params);
  }

  onsearch(params: any): Promise<any> {
    return this.httpService.getRequest(API.listSupplyStationUser, params);
  }
  addCorpSupplyStation(params: any): Promise<any> {
    return this.httpService.formDataPostRequest(API.addCorpSupplyStation, params);
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
  listSupplyStationUser(params: any): Promise<any> {
    return this.httpService.getRequest(API.listSupplyStationUser, params);
  }
  changeFreeze(params: any): Promise<any> {
    return this.httpService.getRequest(API.changefreeze, params);
  }
}
