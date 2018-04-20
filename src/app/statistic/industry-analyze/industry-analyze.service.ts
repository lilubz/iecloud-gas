import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API } from './../../common/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class IndustryAnalyzeService {
  API = API;



  constructor(private httpService: HttpService) { }

  getDropdownForCorpInfoInRegion(params: any): Promise<any> {
    return this.httpService.getRequest(this.API.getDropdownForCorpInfoInRegion, params);
  }

  fillingFluctuations(params: any): Promise<any> {
    return this.httpService.getRequest(this.API.fillingFluctuations, params);
  }

  listRegionInfo(params: any): Promise<any> {
    return this.httpService.getRequest(this.API.listRegionInfo, params);
  }
}
