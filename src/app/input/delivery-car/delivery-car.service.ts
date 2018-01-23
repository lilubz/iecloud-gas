import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from './../../core/http.service';
import { API } from './../../core/api';
@Injectable()
export class DeliveryCarService {
  constructor(private HttpService: HttpService) { }

  listTheCorpDispatcherInfoByTheNameOfTheCorpDispatcher(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listTheCorpDispatcherInfoByTheNameOfTheCorpDispatcher, params);
  }
  insertCorpCarInfoDistribution(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(API.insertCorpCarInfoDistribution, params);
  }

}
