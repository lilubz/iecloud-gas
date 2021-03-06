import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class EnterpriseFoundService {
    constructor(private httpService: HttpService) { }

    AddCorpInfo(params: any): Promise<any> {
      return this.httpService.formDataPostRequest(API.addCorpInfo, params);
    }
}
