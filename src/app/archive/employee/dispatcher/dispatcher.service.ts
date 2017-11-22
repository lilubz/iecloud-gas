import {
  Injectable,
  Inject
} from '@angular/core';
import {
  Headers
} from '@angular/http';
import {
  HttpService
} from './../../../core/http.service';
import {
  API_TOKEN
} from './../../../core/api';
@Injectable()
export class DispatcherService {
  constructor(private HttpService: HttpService, @Inject(API_TOKEN) private API) { }

  getDropdownForCorpInfoInRegion(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getDropdownForCorpInfoInRegion, params);
  }
  getDispatcherInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(this.API.getDispatcherInfo, params);
  }
}
