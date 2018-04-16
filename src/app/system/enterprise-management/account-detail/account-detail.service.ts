import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';


@Injectable()
export class AccountDetailService {
    constructor(private httpService: HttpService) { }

    searchAccount(params: any): Promise<any> {
      return this.httpService.getRequest(API.getlistCorpUser, params);
    }
    changeFreeze(params: any): Promise<any> {
      return this.httpService.getRequest(API.changefreeze, params);
    }
}
