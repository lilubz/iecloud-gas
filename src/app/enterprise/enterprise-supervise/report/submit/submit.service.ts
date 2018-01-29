import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/http.service';
import { API } from '../../../../common/api';

@Injectable()
export class SubmitService {
  constructor(private HttpService: HttpService) { }

  listReportCommitInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listReportCommitInfo, params);
  }

  reportCommit(params?: any): Promise<any> {
    return this.HttpService.formDataPostRequest(API.reportCommit, params);
  }

}
