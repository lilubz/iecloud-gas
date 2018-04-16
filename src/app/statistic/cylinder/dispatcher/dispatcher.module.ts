import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatcherRoutingModule } from './dispatcher-routing.module';
import { SharedModule } from './../../../shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { DispatcherComponent } from './dispatcher.component';
import { DispatcherDetailsComponent } from './dispatcher-details/dispatcher-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DispatcherRoutingModule
  ],
  declarations: [
    OverviewComponent,
    DispatcherComponent,
    DispatcherDetailsComponent
  ]
})
export class DispatcherModule { }
