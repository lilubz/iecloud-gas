import { Injectable, Inject } from '@angular/core';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';

import { API } from './../common/api';
import { HttpService } from './../core/http.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../core/userState.service';
import { OrganizationType } from '../common/OrganizationType';

@Injectable()
export class LoginService {

  constructor(
    private httpService: HttpService,
    private userStateService: UserStateService,
    private router: Router,
    private messageService: MessageService
  ) { }
  signIn(params: { username: string, password: string }): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.signIn, params)
      .then(data => {
        if (data.status === 0) {// 登录成功
          this.userStateService.setUser(data.data || '');
          // if (this.userStateService.getUserOrganizationType() === OrganizationType.Enterprise) {
          //   this.router.navigate(['/enterprise']);//企业账号
          // } else if (this.userStateService.getUserOrganizationType() === OrganizationType.Government) {
          // }
          this.router.navigate(['/home',], { queryParams: { v: '0.3' } });//政府账号
          return true;

        } else if (data.status === 4) {// 已经登录
          this.messageService.add({ severity: 'warning', summary: '您已登录', detail: '如需登录其它账号请先退出再登录！' });
          this.userStateService.setUser(data.data || '');

          // if (this.userStateService.getUserOrganizationType() === OrganizationType.Enterprise) {
          //   this.router.navigate(['/enterprise']);
          // } else if (this.userStateService.getUserOrganizationType() === OrganizationType.Government) {
          //   this.router.navigate(['/government']);
          // }
          this.router.navigate(['/home',], { queryParams: { v: '0.3' } });
          return true;
        } else {
          this.messageService.add({ severity: 'error', summary: '登录失败', detail: data.msg });
          return false;
        }
      }).catch(error => {
        // console.log(error);
        throw error;

      });



  }

  signUp(params: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.queryLog, params);
  }

  logout(params?: any): Promise<any> {
    return this.httpService
      .withCredentialsPostRequest(API.logout, params)
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

  query(params: any): Promise<any> {
    return this.httpService.getRequest(API.queryAnnouncement, params);
  }
}
