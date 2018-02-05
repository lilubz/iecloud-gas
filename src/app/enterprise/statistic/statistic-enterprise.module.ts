import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticRoutingModule } from './statistic-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { StatisticComponent } from './statistic.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { CylinderComponent } from './cylinder/cylinder.component';
import { AffairComponent } from './affair/affair.component';

import { EnterpriseComponent as CylinderEnterpriseComponent } from './cylinder/enterprise/enterprise.component';
import { CylinderStorageComponent } from './cylinder/cylinder-storage/cylinder-storage.component';
import { StorageDistributionComponent } from './cylinder/storage-distribution/storage-distribution.component';
import { CustomerComponent } from './cylinder/customer/customer.component';
import { PossessComponent } from './cylinder/possess/possess.component';
import { FlowComponent } from './cylinder/flow/flow.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatisticRoutingModule
  ],
  declarations: [
    StatisticComponent,
    EnterpriseComponent,
    CylinderComponent,
    AffairComponent,
    CylinderEnterpriseComponent,
    CylinderStorageComponent,
    StorageDistributionComponent,
    CustomerComponent,
    PossessComponent,
    FlowComponent,
  ],
  providers: [

  ]
})
export class StatisticModule { }
