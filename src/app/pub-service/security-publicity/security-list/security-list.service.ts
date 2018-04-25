import { Router } from '@angular/router';
import { UserStateService } from '../../../core/userState.service';
import { HttpService } from '../../../core/http.service';
import { API } from '../../../common/api';
import { Injectable } from '@angular/core';

@Injectable()
export class SecurityListService {
  // private headers = new Headers({ 'Content-Type': 'application/json; charser=UTF-8' });

  constructor(private httpService: HttpService, private userStateService: UserStateService, private router: Router) { }


  getUserCountRecentlyRegister(params): Promise<any> {
    return this.httpService
      .getRequest(API.getUserCountRecentlyRegister, params);
  }

  // 获取公告列表
  listSecurityPublicityArticle(params): Promise<any> {
    return this.httpService
      .getRequest(API.listSecurityPublicityArticle, params);
  }
  // 删除公告
  deleteSecurityPublicityArticle(params: { articleId: string }): Promise<any> {
    return this.httpService
      .getRequest(API.deleteSecurityPublicityArticle, params);
  }
}
