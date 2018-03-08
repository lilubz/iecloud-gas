import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../../shared/shared.module';
import { ReportRoutingModule } from './report-routing.module';

import { ReportComponent } from './report.component';
import { SubmitComponent } from './submit/submit.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
    // ReportRoutingModule,
  ],
  declarations: [
    ReportComponent,
    SubmitComponent,
    HistoryComponent
  ]
})
export class ReportModule { }
