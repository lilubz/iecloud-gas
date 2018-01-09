import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../core/api';

@Injectable()
export class DetailsService {
  constructor(private HttpService: HttpService) { }

  listTransactionChildren(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(API.listTransactionChildren, params);
  }

  listEventOrganizationId(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listEventOrganizationId, params);
  }

}
