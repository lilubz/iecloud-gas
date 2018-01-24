import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API } from './../../../common/api';
import { HttpService } from './../../../core/http.service';

@Injectable()
export class CylinderListService {
  API = API;
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService ) { }

  getCylinderSearchOpt(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.cylinderSelectOpt, params);
  }

  getCylinders(params: any): any {
    return this.httpService
      .withCredentialsPostRequest(this.API.getCylinders, params);
  }

}
