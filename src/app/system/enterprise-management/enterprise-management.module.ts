import { NgModule, } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EnterpriseManagementRoutingModule, } from './enterprise-management.routing';

import { EnterpriseManagementComponent } from './enterprise-management.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { EnterpriseFoundComponent } from './enterprise-found/enterprise-found.component';
import { AccountOpeningComponent } from './account-opening/account-opening.component';

import { AccountDetailService } from './account-detail/account-detail.service';
import { EnterpriseFoundService } from './enterprise-found/enterprise-found.service';
import { AccountOpeningService } from './account-opening/account-opening.service';


@NgModule({
  declarations: [
    EnterpriseManagementComponent,
    AccountDetailComponent,
    EnterpriseFoundComponent,
    AccountOpeningComponent

  ],
  imports: [
    SharedModule,
    // EnterpriseManagementRoutingModule,
  ],
  providers: [
    AccountDetailService,
    EnterpriseFoundService,
    AccountOpeningService
  ]
})
export class EnterpriseManagementModule { }
