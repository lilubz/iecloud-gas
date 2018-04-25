import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { EnterpriseManagementModule } from './enterprise-management/enterprise-management.module';
import { SystemRoutingModule } from './system-routing.module';

import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';

import { UserService } from './user/user.service';
import { MessagesService } from './messages/messages.service';
import { ConfirmationService } from 'primeng/primeng';
import { BottleLibraryComponent } from './bottle-library/bottle-library.component';
import { BottleLibraryService } from './bottle-library/bottle-library.service';
import { GasBusinessLicenseComponent } from './gas-business-license/gas-business-license.component';
import { SystemUserModule } from './system-user/system-user.module';
import { SettingManagementModule } from './setting-management/setting-management.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EnterpriseManagementModule,
    SystemUserModule,
    SettingManagementModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemComponent,
    UserComponent,
    MessagesComponent,
    BottleLibraryComponent,
    GasBusinessLicenseComponent

  ],
  providers: [
    UserService,
    MessagesService,
    ConfirmationService,
    BottleLibraryService,

  ]
})
export class SystemModule { }
