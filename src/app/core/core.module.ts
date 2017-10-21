import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpService } from './http.service';
import { APIProvide } from './api';
import { DATE_LOCALIZATION, zh_CN } from './date-localization';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    HttpService,
    APIProvide,
    {
      provide: DATE_LOCALIZATION,
      useValue: zh_CN
    },
  ]
})
export class CoreModule { }
