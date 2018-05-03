import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { API } from '../../common/api';

@Injectable()
export class CustomerEvaluationService {
    constructor(private HttpService: HttpService) { }

    listOrderEvaluate(params?) {
        return this.HttpService.getRequest(API.listOrderEvaluate, params);
    }
    avgOrderEvaluate(params?) {
        return this.HttpService.getRequest(API.avgOrderEvaluate, params);
    }
}
