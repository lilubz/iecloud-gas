import { Injectable, } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';
@Injectable()
export class GasHolderService {
  constructor(private httpService: HttpService) { }

  getGasHolder(params: any): Promise<any> {
    return this.httpService.getRequest(API.listFillingGasTank, params);
  }
  getenterprise(params: any): Promise<any> {
    return this.httpService
      .formPostRequest(API.cylinderSelectOpt, params);
  }
}
