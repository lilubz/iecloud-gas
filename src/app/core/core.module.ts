import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { APIProvide } from './api';
import { AuthGuard } from './auth-guard.service';
import { CommonRequestService } from './common-request.service';
import { DATE_LOCALIZATION, zh_CN } from './date-localization';
import { Format } from './format.service';
import { HttpService } from './http.service';
import { LoginService } from './../login/login.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './userState.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    APIProvide,
    AuthGuard,
    CommonRequestService,
    Format,
    HttpService,
    LoginService,
    MessageService,
    UserStateService,
    {
      provide: DATE_LOCALIZATION,
      useValue: zh_CN
    },
  ]
})
export class CoreModule { }
