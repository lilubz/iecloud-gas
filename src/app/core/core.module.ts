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
import { FullScreenService } from './full-screen.service';
import { CookieService } from './cookie.service';
import { RedirectionPageService } from '../redirectionPage/redirectionPage.service';
import { ConfirmationService } from 'primeng/primeng';
import { SystemSetGuard } from './systemSet-guard.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    AuthGuard,
    PermissionGuard,
    CommonRequestService,
    ConfirmationService,
    HttpService,
    LoginService,
    MessageService,
    UserStateService,
    Util,
    Logger,
    FullScreenService,
    CookieService,
    RedirectionPageService,
    SystemSetGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
