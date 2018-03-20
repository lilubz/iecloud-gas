import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AuthGuard } from './auth-guard.service';
import { CommonRequestService } from './common-request.service';
import { HttpService } from './http.service';
import { LoginService } from './../login/login.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { UserStateService } from './userState.service';
import { Util } from './util';
import { Logger } from './logger';
import { PermissionGuard } from './permission-guard.service';
import { CookieService } from './cookie.service';
import { Base64Service } from './base64.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    AuthGuard,
    PermissionGuard,
    CommonRequestService,
    HttpService,
    LoginService,
    MessageService,
    UserStateService,
    Util,
    Logger,
    CookieService,
    Base64Service
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
