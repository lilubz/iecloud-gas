import { Injectable, Inject } from '@angular/core';

import { API_TOKEN } from './../core/api';
import { HttpService } from './../core/http.service';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API) { }

  signIn(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.signIn, params)
      .catch(this.handleError);
  }

  signUp(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.queryLog, params)
      .catch(this.handleError);
  }

  logout(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.logout, params)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}