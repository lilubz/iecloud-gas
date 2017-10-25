
import {
    Injectable
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
  export class CustomerDetailService {
  //   constructor(private http: Http, private HttpService: HttpService) {}

  // querySingle(params: any): Promise < any > {
  //     return this.HttpService.formPostRequest(API_TOKEN.querySingleUrl, params)
  //       .catch(this.handleError);
  //   }
  //   private handleError(error: any): Promise<any> {
  //     return Promise.reject(error.message || error);
  // }
  }
