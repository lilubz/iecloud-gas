import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from './../../../../core/http.service';
import { API } from './../../../../common/api';
@Injectable()
export class CustomerDetailService {
  constructor(private HttpService: HttpService) { }

  querySingle(params: any): Promise<any> {
    return this.HttpService.getRequest(API.queryCustomerDetail, params);
  }
  listUserHasGc(params: any): Promise<any> {
    return this.HttpService.getRequest(API.listUserHasGc, params);
  }
}
