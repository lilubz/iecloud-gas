import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class AffairListService {
  constructor(private HttpService: HttpService) { }

  listCorpTransactionInfo(params?) {
    return this.HttpService.getRequest(API.listCorpTransactionInfo, params);
  }
}
