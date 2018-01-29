import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/http.service';
import { API } from '../../../../common/api';

@Injectable()
export class StatisticsService {
  constructor(private HttpService: HttpService) { }

  reportStatistics(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.reportStatistics, params);
  }

}
