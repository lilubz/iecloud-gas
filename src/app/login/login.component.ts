import { Component, OnDestroy, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../core/userState.service';
import { clearInterval } from 'timers';
import { API } from '../common/api';
@Component({
  selector: 'gas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {
  userName = '';
  password = '';
  messageList = [];
  messageList1: any[] = [];
  total = 0;
  ss = 'hhh';
  timer: any;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    private loginService: LoginService, private messageService: MessageService, private router: Router,
    private userStateService: UserStateService) {
    this.renderer.addClass(this.document.body, 'login-body');
    this.renderer.setStyle(this.document.querySelector('html'), 'height', '100%');
  }
  ngOnInit() {
    this.getList();
    let sum = -1;
    this.timer = setInterval(() => {
      sum += 1;
      this.messageList1 = this.messageList.slice(sum, sum + 5);
      // console.log(sum);
      if (sum >= this.messageList.length - 5) {
        sum = -1;
        // tslint:disable-next-line:no-unused-expression
        this.timer;
        // console.log(this.messageList.length);

      }
    }, 1000);

  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'login-body');
    this.renderer.removeStyle(this.document.querySelector('html'), 'height');
  }
  getList() {
    this.loginService.query({}).then(data => {
      if (data.status === 0) {
        this.messageList = data.data.announcements;
        this.messageList1 = this.messageList.slice(0, 5);
        // console.log(data.data);
      } else {
        this.messageList = [];
        this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
      }
    }).catch(error => {
      this.messageList = [];
      this.messageService.add({ severity: 'error', summary: '服务器错误', detail: error.status });
    });
  }

  signIn() {
    this.loginService.signIn({
      username: this.userName,
      password: this.password
    });
  }
}
