import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from './../../../../core/http.service';
import { API } from './../../../../common/api';
@Injectable()
export class SearchService {
  API = API;
  constructor(private HttpService: HttpService ) { }

  getCarType(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getCarType, params);
  }

  getCarNumberList(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getCarNumberList, params);
  }

  getCarList(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getCarList, params);
  }

  listCorpInfoInRegion(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.listCorpInfoInRegion, params);
  }
}
