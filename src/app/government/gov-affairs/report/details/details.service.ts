import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/http.service';
import { API } from '../../../../common/api';

@Injectable()
export class DetailsService {
  constructor(private HttpService: HttpService) { }

  reportCommitDetail(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.reportCommitDetail, params);
  }

}
