import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from './../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class SystemLogService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(
    private httpService: HttpService
  ) { }

  queryLog(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.queryLog, params)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
