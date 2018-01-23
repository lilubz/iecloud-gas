import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from './../../core/http.service';
import { API } from './../../core/api';
@Injectable()
export class TransportCarService {
  constructor(private HttpService: HttpService) { }

  insertCorpCarInfoTO(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(API.insertCorpCarInfoTO, params);
  }

}
