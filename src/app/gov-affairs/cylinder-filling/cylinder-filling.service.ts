import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../core/api';

@Injectable()
export class CylinderFillingService {
  constructor(private HttpService: HttpService) { }

  listFillingInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listFillingInfo, params);
  }
}
