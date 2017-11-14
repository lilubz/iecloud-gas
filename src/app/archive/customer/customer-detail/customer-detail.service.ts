import {
  Injectable, Inject
} from '@angular/core';
import { Headers } from '@angular/http';
import {
  HttpService
} from './../../../core/http.service';
import { API_TOKEN } from './../../../core/api';
@Injectable()
export class CustomerDetailService {
  constructor(private HttpService: HttpService, @Inject(API_TOKEN) private API) { }

  querySingle(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.queryCustomerDetail, params)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
