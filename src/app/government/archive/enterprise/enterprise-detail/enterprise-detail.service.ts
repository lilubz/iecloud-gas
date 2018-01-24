import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from '../../../../core/http.service';
import { API } from '../../../../common/api';


@Injectable()
export class EnterpriseDetailService {
  constructor(private HttpService: HttpService) { }

  getlistCorp(params: any): Promise<any> {
    return this.HttpService.getRequest(API.listCorp, params);
  }
}
