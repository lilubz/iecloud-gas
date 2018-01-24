import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class AffairDetailsService {
  constructor(private HttpService: HttpService) { }

  listTransactionDetailInfo(params?) {
    return this.HttpService.getRequest(API.listTransactionDetailInfo, params);
  }
  listCorpEventInfo(params?) {
    return this.HttpService.getRequest(API.listCorpEventInfo, params);
  }
  cooperativeOperation(params?) {
    return this.HttpService.formDataPostRequest(API.cooperativeOperation, params);
  }
}
