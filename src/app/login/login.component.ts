import { Component, OnDestroy, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { MessageService } from 'primeng/components/common/messageservice';
@Component({
  selector: 'gas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  userName: string;
  password: string;

  constructor( @Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    private loginService: LoginService, private messageService: MessageService, private router: Router) {
    this.renderer.addClass(this.document.body, 'login-body');
    this.renderer.setStyle(this.document.querySelector('html'), 'height', '100%');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'login-body');
    this.renderer.removeStyle(this.document.querySelector('html'), 'height');
  }

  signIn() {
    this.loginService.signIn({
      phone: this.userName,
      password: this.password
    }).then(data => {
      if (data.status === 0) {
        sessionStorage.setItem('user', data.data);
        this.router.navigate(['/archive']);
      } else {
        this.messageService.add({ severity: 'error', summary: '登录失败', detail: data.msg });
      }
    });
  }
}
