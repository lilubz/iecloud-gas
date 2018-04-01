import { Component, OnDestroy, Renderer2, Inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../core/userState.service';
import { CookieService } from './../core/cookie.service';
import { Base64 } from 'js-base64';

import { API } from '../common/api';
import * as $ from 'jquery';
@Component({
  selector: 'gas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy, OnInit {
  chkRememberPass = false;
  window: any = window;
  userName: any = '';
  password = '';
  messageList = [];
  scrollInterval: any;
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
    private userStateService: UserStateService,
    private cookieService: CookieService, // 注入服务
  ) {
    this.renderer.addClass(this.document.body, 'login-body');
    this.renderer.setStyle(this.document.querySelector('html'), 'height', '100%');
  }
  ngOnInit() {
    this.getUserInfoInCookie();
    this.getList();
    this.scrollInterval = setInterval(this.move, 3000);
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'login-body');
    this.renderer.removeStyle(this.document.querySelector('html'), 'height');
    clearInterval(this.scrollInterval);
  }
  getList() {
    this.loginService.query({}).then(data => {
      if (data.status === 0) {
        this.messageList = data.data.announcements;
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
    }).then(data => {
      if (data) {
        this.setUserInfoInCookie();
      }
    });
  }
  // animate滚动
  move = () => {
    $('.carousel ul').animate(
      { 'margin-top': '-41px' }, 500, () => {
        const first = $('.carousel ul li:first-child'); // 找到ul的第一个子元素
        $('.carousel ul').append(first); // 插入到ul的里面最后后面
        $('.carousel ul').css('margin-top', '0px'); // ulmargin-top归0
      });
  }

  getUserInfoInCookie() {
    this.chkRememberPass = this.cookieService.getItem('chkRememberPass') === 'true' ? true : false;
    if (this.chkRememberPass) {
      var userNameValue = this.cookieService.getItem("userName");
      this.userName = Base64.decode(userNameValue);//解密
      var userPassValue = this.cookieService.getItem("password");
      this.password = Base64.decode(userPassValue);//解密
    }
  }

  setUserInfoInCookie() {
    if (this.chkRememberPass) {
      //记住账号密码
      this.cookieService.setItem("userName", Base64.encode(this.userName), 365 * 10);//加密
      this.cookieService.setItem("password", Base64.encode(this.password), 365 * 10);//加密
      this.cookieService.setItem("chkRememberPass", this.chkRememberPass, 365 * 10)
    } else {
      this.cookieService.removeItem("userName");
      this.cookieService.removeItem("password");
      this.cookieService.removeItem("chkRememberPass");
    }
  }
}
