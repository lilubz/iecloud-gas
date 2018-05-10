import { Injectable, } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class UsingCylinderService {
    constructor(private httpService: HttpService) { }
    
    listUserHasGc(params: any): Promise<any> {
      return this.httpService.getRequest(API.listUserHasGc, params);
    }
}
