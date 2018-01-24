import {
  Injectable, Inject
} from '@angular/core';
import { Headers } from '@angular/http';
import {
  HttpService
} from './../../../../core/http.service';
import { API } from './../../../../common/api';
@Injectable()
export class CylinderDetailService {
  constructor(private HttpService: HttpService ) { }

  querySingle(params: any): Promise<any> {
    return this.HttpService.getRequest(API.queryCylinderDetail, params)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
