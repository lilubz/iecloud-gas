import { API_TOKEN } from './../../core/api';
import { HttpService } from './../../core/http.service';
import {
    Injectable, Inject
  } from '@angular/core';
  import { Headers } from '@angular/http';

  @Injectable()
  export class CylinderInfoService {
    constructor(private HttpService: HttpService, @Inject(API_TOKEN) private API) { }

    // querySingle(params: any): Promise<any> {
    //   return this.HttpService.formPostRequest(this.API.queryCustomerDetail, params)
    //     .catch(this.handleError);
    // }
      // getInformationList(params: any): Promise<any> {
  //     return this.HttpService.formPostRequest(API.queryInformationUrl, params)
  //         .catch(this.handleError);
  // }
  // updateInformation(params: any): Promise<any> {
  //     return this.HttpService.formPostRequest(API.updateInformationUrl, params)
  //         .catch(this.handleError);
  // }
  // addInformation(params:any): Promise<any> {
  //     return this.HttpService.formPostRequest(API.addInformationUrl,params)
  //         .catch(this.handleError);
  // }
  // deleteInformation(params:any): Promise<any> {
  //     return this.HttpService.formPostRequest(API.deleteInformationUrl,params)
  //         .catch(this.handleError);
  // }
    private handleError(error: any): Promise<any> {
      return Promise.reject(error.message || error);
    }
  }
