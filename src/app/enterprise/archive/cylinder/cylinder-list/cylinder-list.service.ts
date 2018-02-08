import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { API } from './../../../../common/api';
import { HttpService } from './../../../../core/http.service';

@Injectable()
export class CylinderListService {
  API = API;


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
