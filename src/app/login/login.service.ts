import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API_TOKEN } from './../core/api';
import { HttpService } from './../core/http.service';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API) { }

  signIn(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.signIn, params);
  }

  signUp(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.queryLog, params);
  }

  logout(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.logout, params);
  }
}
