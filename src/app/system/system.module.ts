import { SharedModule } from './../shared/shared.module';
import { UserService } from './user/user.service';
import { SystemRoutingModule } from './system-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations: [
    SystemComponent,
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class SystemModule { }
