import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';

import { API_TOKEN } from './../core/api';
import { HttpService } from './../core/http.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../core/userState.service';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charser=UTF-8' });

  constructor(private httpService: HttpService, @Inject(API_TOKEN) private API,
    private userStateService: UserStateService, private router: Router, private messageService: MessageService) { }

  signIn(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.signIn, params)
      .then(data => {
        if (data.status === 0) {// 登录成功
          this.userStateService.setUser(data.data || '');
          this.router.navigate(['/archive']);
          return true;
        } else if (data.status === 4) {// 已经登录
          this.messageService.add({ severity: 'warning', summary: '您已登录', detail: '如需登录其它账号请先退出再登录！' });
          this.router.navigate(['/archive']);
          return true;
        } else {
          this.messageService.add({ severity: 'error', summary: '登录失败', detail: data.msg });
          return false;
        }
      }).catch(error => {
        console.log(error);
        throw error;

      });
  }

  signUp(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.queryLog, params);
  }

  logout(params?: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(this.API.logout, params)
      .then(data => {
        this.userStateService.setUser(null);
        this.router.navigate(['/login']);
        if (data.status !== 0) {
          this.messageService.add({ severity: 'error', summary: '注销异常', detail: data.msg });
          return false;
        } else {
          return true;
        }
      }).catch(error => {
        this.messageService.add({ severity: 'error', summary: '注销异常', detail: error.statusText });
        this.userStateService.setUser(null);
        this.router.navigate(['/login']);
      });
  }
}
