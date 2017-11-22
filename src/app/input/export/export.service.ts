import {
  Injectable, Inject
} from '@angular/core';
import { Headers } from '@angular/http';
import {
  HttpService
} from './../../core/http.service';
import { API_TOKEN } from './../../core/api';
@Injectable()
export class ExportService {
  constructor(private HttpService: HttpService, @Inject(API_TOKEN) private API) { }

  exportuserInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.exportUserUndistributed, params);
  }
  exportcardInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.exportUserCertNumUndistributed, params);
  }
  exportcylinderInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.exportUnboundGcBasicInfo, params);
  }
  exportcylinderTagInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(this.API.exportUnboundGcLabelInfo, params);
  }
}
