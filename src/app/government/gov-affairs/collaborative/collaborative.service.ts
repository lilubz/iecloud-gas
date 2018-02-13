import { Injectable } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';

@Injectable()
export class CollaborativeService {
  constructor(private HttpService: HttpService) { }

  getDropdownForRegionSysUser(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.getDropdownForRegionSysUser, params);
  }

  listTransactionDetailInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listTransactionDetailInfo, params);
  }

  listEventDetailInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listEventDetailInfo, params);
  }

  insertTransactionBasic(params?: any): Promise<any> {
    return this.HttpService.formDataPostRequest(API.insertTransactionBasic, params);
  }

  listTransactionChildren(params?: any): Promise<any> {
    return this.HttpService.formPostRequest(API.listTransactionChildren, params);
  }

  listMyTransaction(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listMyTransaction, params);
  }

  cooperativeOperation(params?: any): Promise<any> {
    return this.HttpService.formDataPostRequest(API.cooperativeOperation, params);
  }

  deleteTransaction(params?: any): Promise<any> {
    return this.HttpService.delete(API.deleteTransaction, params);
  }

  get(interfaceName, params) {
    return this.HttpService.getRequest(API[interfaceName], params);
  }

  listRegionInfo(params) {
    return this.HttpService.getRequest(API.listRegionInfo, params);
  }

  listCollaborativeInfo(params?: any): Promise<any> {
    return this.HttpService.getRequest(API.listCollaborativeInfo, params);
  }

  listTransactionTypeInfo(params) {
    return this.HttpService.getRequest(API.listTransactionTypeInfo, params);
  }

  listTransactionSourceInfo(params) {
    return this.HttpService.getRequest(API.listTransactionSourceInfo, params);
  }
  listChildUserId(params) {
    return this.HttpService.getRequest(API.listChildUserId, params);
  }
  listTransactionInfo(params) {
    return this.HttpService.getRequest(API.listTransactionInfo, params);
  }
}
