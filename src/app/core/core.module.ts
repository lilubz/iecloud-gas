import { UtilService } from './util.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
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
    UtilService,
    {
      provide: DATE_LOCALIZATION,
      useValue: zh_CN
    },
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
