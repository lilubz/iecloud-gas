import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';


@Injectable()
export class PartitionOverviewService {
  constructor(private httpService: HttpService) { }

  regionOverview(params: any): Promise<any> {
    return this.httpService.getRequest(API.regionOverview, params);
  }
}
