import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportModule } from './report/report.module';
import { SharedModule } from '../../shared/shared.module';
import { EnterpriseSuperviseRoutingModule } from './enterprise-supervise-routing.module';

import { EnterpriseSuperviseComponent } from './enterprise-supervise.component';
import { AffairListComponent } from './affair-list/affair-list.component';
import { AffairDetailsComponent } from './affair-details/affair-details.component';
import { RepricingRistComponent } from './repricing-rist/repricing-rist.component';

@NgModule({
  imports: [
    CommonModule,
    EnterpriseSuperviseRoutingModule,
    ReportModule,
    SharedModule
  ],
  declarations: [
    EnterpriseSuperviseComponent,
    AffairListComponent,
    AffairDetailsComponent,
    RepricingRistComponent
  ]
})
export class EnterpriseSuperviseModule { }
