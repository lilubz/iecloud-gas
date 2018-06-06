import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';


@Injectable()
export class CityOverviewService {
  constructor(private httpService: HttpService) { }

  corpOverview(params: any): Promise<any> {
    return this.httpService.getRequest(API.corpOverview, params);
  }
}
