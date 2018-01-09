import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/http.service';
import { API } from '../../../../core/api';

@Injectable()
export class ListService {
  constructor(private HttpService: HttpService) { }

  getDropdownForRegionSysUser(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getDropdownForRegionSysUser, params);
  }

}
