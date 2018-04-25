import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class SuperviseDataService {

  constructor(private httpService: HttpService) { }

  listLicenseExpire(params?: any): Promise<any> {
    return this.httpService.getRequest(API.listLicenseExpire, params);
  }

  listGasInspection(params?: any): Promise<any> {
    return this.httpService.getRequest(API.listGasInspection, params);
  }

  listGasScrap(params?: any): Promise<any> {
    return this.httpService.getRequest(API.listGasScrap, params);
  }

  searchGasCylinder(params?: any): Promise<any> {
    return this.httpService.formPostRequest(API.getCylinders, params);
  }

  listRegionInfo(params?: any): Promise<any> {
    return this.httpService.getRequest(API.listRegionInfo, params);
  }

  cylinderSelectOpt(params?: any): Promise<any> {
    return this.httpService.withCredentialsPostRequest(API.cylinderSelectOpt, params);
  }
}
