
import {
  Injectable, Inject
} from '@angular/core';
import {
  Headers,
  Http,
  ResponseContentType
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {
    HttpService
  } from './../../../core/http.service';
import { API_TOKEN } from './../../../core/api';
@Injectable()
export class CylinderDetailService {
  constructor(private http: Http, private HttpService: HttpService, @Inject(API_TOKEN) private API) {}

querySingle(params: any): Promise < any > {
    return this.HttpService.formPostRequest(this.API.queryCylinderDetail, params)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
}
}
