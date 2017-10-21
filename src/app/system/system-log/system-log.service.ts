// import { Http } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { APIProvide, API_TOKEN } from './../../core/api';
import { HttpService } from './../../core/http.service';

@Injectable()
export class SystemLogService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API) { }

  queryLog(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.queryLog, params)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
