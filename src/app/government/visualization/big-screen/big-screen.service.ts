import { Injectable, } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import {API} from '../../../common/api';


@Injectable()
export class BigScreenService {
  constructor(private httpService: HttpService) { }

  getData(params: any): Promise<any> {
    return this.httpService.getRequest(API.getBigScreenData, params);
  }
}
