import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class ManageService {
  constructor(private HttpService: HttpService) { }

  listReportInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listReportInfo, params);
  }
  addReportInfo(params?: any): Promise<any> {
    return this.HttpService.formDataPostRequest(API.addReportInfo, params);
  }
  deleteReport(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.deleteReport, params);
  }
}
