import {
  Injectable, Inject
} from '@angular/core';
import { Headers } from '@angular/http';
import {
  HttpService
} from './../../core/http.service';
import { API } from './../../common/api';
@Injectable()
export class ExportService {
  constructor(private HttpService: HttpService) { }

  exportuserInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(API.exportUserUndistributed, params);
  }
  exportcardInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(API.exportUserCertNumUndistributed, params);
  }
  exportcylinderInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(API.exportUnboundGcBasicInfo, params);
  }
  exportcylinderTagInfo(params: any): Promise<any> {
    return this.HttpService.getRequest(API.exportUnboundGcLabelInfo, params);
  }
}
