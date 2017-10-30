import { Component, OnDestroy, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './../core/userState.service';
@Component({
  selector: 'gas-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  userName = '';
  password = '';

  constructor( @Inject(DOCUMENT) private document: Document, private renderer: Renderer2,
    private loginService: LoginService, private messageService: MessageService, private router: Router,
    private userStateService: UserStateService) {
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
    });
  }
}
