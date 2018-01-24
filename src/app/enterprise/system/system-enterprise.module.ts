import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';

import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';
import { ConfirmationService } from 'primeng/primeng';
import { BottleLibraryComponent } from './bottle-library/bottle-library.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemComponent,
    UserComponent,
    BottleLibraryComponent
  ],
  providers: [
    UserService,
    ConfirmationService,

  ]
})
export class SystemModule { }
