import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { ReportRoutingModule } from './report-routing.module';

import { ReportComponent } from './report.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubmitComponent } from './submit/submit.component';
import { ManageComponent } from './manage/manage.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule
  ],
  declarations: [
    ReportComponent,
    StatisticsComponent,
    SubmitComponent,
    ManageComponent,
    DetailsComponent
  ]
})
export class ReportModule { }
