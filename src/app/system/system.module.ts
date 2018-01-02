import { SharedModule } from './../shared/shared.module';
import { UserService } from './user/user.service';
import { SystemRoutingModule } from './system-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations: [
    SystemComponent,
    UserComponent,
    MessagesComponent
  ],
  providers: [
    UserService,
    MessagesService,
    ConfirmationService
  ]
})
export class SystemModule { }
