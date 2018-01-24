import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GovernmentComponent } from './government.component';
import { GovernmentRoutingModule } from './government-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GovernmentRoutingModule
  ],
  declarations: [
    GovernmentComponent,
    HomeComponent,
    LayoutComponent
  ],
  providers: [

  ]
})
export class GovernmentModule { }
